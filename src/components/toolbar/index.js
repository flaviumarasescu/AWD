import React from 'react';
import SideMenu from '../sidemenu/SideMenu';
import './style.scss';
import { NavLink } from 'react-router-dom';

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div />
      <div className="toggle-btn">
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>
      <div className="toolbar_logo">
        <NavLink to="/">Flaviu-Stefan Marasescu</NavLink>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/web-development">Web Development</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
