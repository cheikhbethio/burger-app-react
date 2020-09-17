import React from 'react'
import cssClasses from './Toolbar.css';
import Logo from  '../../Logo/Logo.jsx';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (  
        <header className={cssClasses.Toolbar}>
            <div>Menu</div>
            <div className={cssClasses.Logo}>
                <Logo/>
            </div>
            <nav className={cssClasses.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
}
 
export default toolbar;