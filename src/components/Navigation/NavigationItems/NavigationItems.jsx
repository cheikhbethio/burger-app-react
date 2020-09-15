import React from 'react'
import cssClasses from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem.jsx'
 
const navigationItems = (props) => {
    return ( 
        <ul className={cssClasses.NavigationItems}>
           <NavigationItem link='/' active>
               Burger Builder
           </NavigationItem>
           <NavigationItem>
               Checkout
           </NavigationItem>
        </ul>
     );
}
 
export default navigationItems;