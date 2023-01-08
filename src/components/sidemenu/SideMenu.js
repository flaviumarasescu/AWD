import React from 'react';
import './SideMenu.scss';

const menuToggleButton = (props) => (
  <button tabIndex="0" className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

export default menuToggleButton;
