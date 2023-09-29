import { NavLink } from 'react-router-dom';
import { navLinks } from '../assets/Links';

const Navbar = () => {
  return (
    <div className='flex gap-4'>
      {navLinks.map((menu, value) => (
        <NavLink
          key={value}
          to={menu.link}
          className={({ isActive, isPending }) =>
            isPending
              ? 'text-yellow-600'
              : isActive
              ? 'text-red-400 '
              : 'text-blue-500'
          }
        >
          {menu.title || 'menuItem'}
        </NavLink>
      ))}
      {/* <Link to='/'>Home</Link>
      <Link to='about'>About Us</Link>
      <Link to='projects'>Projects</Link>
      <Link to='contact'>Contact</Link> */}
    </div>
  );
};

export default Navbar;
