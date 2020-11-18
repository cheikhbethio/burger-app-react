/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
import React from 'react';
import cssclasses from './DrawerToggle.css';

const drawerToggle = (props) => (
  <div onClick={props.toggleSidedrawer} className={cssclasses.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
