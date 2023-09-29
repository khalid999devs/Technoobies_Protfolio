import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='h-screen flex justify-between flex-col px-5 py-6'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
