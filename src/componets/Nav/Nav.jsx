import React from "react";
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav}>
       <ul>
         <li><NavLink to="/profile" activeClassName={s.activeLink} className={s.item}>Profile</NavLink></li>
         <li><NavLink to="/dialogs" activeClassName={s.activeLink} className={s.item}>Messages</NavLink></li>
         <li><NavLink to="/news" activeClassName={s.activeLink} className={s.item}>News</NavLink></li>
         <li><NavLink to="/music" activeClassName={s.activeLink} className={s.item}>Music</NavLink></li>
         <li><NavLink to="/settings" activeClassName={s.activeLink} className={s.item}>Settings</NavLink></li>
       </ul>
     </nav>
  );
};

export default Navbar;

