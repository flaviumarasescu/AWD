import React from 'react';
import './SideDrawer.scss';
import { NavLink } from 'react-router-dom';

const sideDrawer = (props) => {
  let drawerClasses = ['side-drawer'];

  if (props.show) {
    drawerClasses = ['side-drawer', 'open'];
  }
  return (
    <nav className={drawerClasses.join(' ')}>
      <ul>
        <li>
          <NavLink to="/" onClick={()=>props.backDropClickHandler()}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={()=>props.backDropClickHandler()}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={()=>props.backDropClickHandler()}>About</NavLink>
        </li>
        <li>
          <NavLink to="/web-development" onClick={()=>props.backDropClickHandler()}>Web Development</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
