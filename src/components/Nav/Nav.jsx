import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) => (isActive ? `${s.item} ${s.activeLink}` : s.item);

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink to="/profile" className={linkClass}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" className={linkClass}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={linkClass}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" className={linkClass}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={linkClass}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
