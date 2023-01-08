import React from 'react';
import './SideDrawer.scss';

const sideDrawer = (props) => {
  let drawerClasses = ['side-drawer'];

  if (props.show) {
    drawerClasses = ['side-drawer', 'open'];
  }
  return (
    <nav className={drawerClasses.join(' ')}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
