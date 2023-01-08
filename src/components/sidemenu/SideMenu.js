import React from 'react';
import './SideMenu.scss';
import searchBars from '../../assets/bars-solid.svg';

const menuToggleButton = (props) => (
  <img
    alt="open side menu"
    tabIndex="0"
    src={searchBars}
    className="toggle-button"
    onClick={props.click}
  />
);

export default menuToggleButton;
