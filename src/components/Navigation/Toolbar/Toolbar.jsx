import React from 'react'
import cssClasses from './Toolbar.css';
import Logo from '../../Logo/Logo.jsx';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.jsx';

const toolbar = (props) => {
    return (
        <header className={cssClasses.Toolbar}>
            <DrawerToggle toggleSidedrawer={props.toggleSidedrawer} />
            <div className={cssClasses.Logo}>
                <Logo />
            </div>
            <nav className={cssClasses.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;