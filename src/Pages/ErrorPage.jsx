import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id='error-page'
      className='h-screen flex justify-center flex-col items-center bg-black text-white font-bold gap-12'
    >
      <h1 className='text-5xl'>Oops!</h1>
      <p className='font-normal'>Sorry, an unexpected error has occurred.</p>
      <p className=' text-red-300'>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link
        className='mt-3 px-10 py-5 bg-white text-black rounded-md hover:text-white hover:bg-black hover:border '
        to={'/'}
      >
        Go Home
      </Link>
    </div>
  );
}
