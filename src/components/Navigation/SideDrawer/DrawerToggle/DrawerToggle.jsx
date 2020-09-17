import React from 'react'
import cssclasses from './DrawerToggle.css';

const drawerToggle = (props) => {
    return (
        <div onClick={props.toggleSidedrawer} className={cssclasses.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawerToggle;