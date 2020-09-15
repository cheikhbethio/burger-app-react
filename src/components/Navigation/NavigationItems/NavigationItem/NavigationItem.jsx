import React from 'react'
import cssClasses from './NavigationItem.css';

const navigationItem = (props) => {
    return ( 
        <li className={cssClasses.NavigationItem}>
            <a href="/" className={props.active ? cssClasses.active : null}>
                {props.children}
            </a>
        </li>
     );
}
 
export default navigationItem;