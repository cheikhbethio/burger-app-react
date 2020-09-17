import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems';
import cssClasses from './SideDrawer.css';
import Logo from '../../Logo/Logo.jsx';
import Aux from '../../../wrappers/Wrapper';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [cssClasses.SideDrawer, cssClasses.Close];
    if (props.open) {
        attachedClasses = [cssClasses.SideDrawer, cssClasses.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={cssClasses.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>

        </Aux>

    );
}
export default sideDrawer;
// import React from 'react'
// import NavigationItems from '../NavigationItems/NavigationItems';
// import cssClasses from './SideDrawer.css';
// import Logo from '../../Logo/Logo.jsx';
// import Aux from '../../../wrappers/Wrapper';
// import Backdrop from '../../UI/Backdrop/Backdrop';

// const sideDrawer = (props) => {
//     let attachedClasses = [cssClasses.SidedDrawer, cssClasses.closed];
//     if(props.open) {
//         attachedClasses = [cssClasses.SidedDrawer, cssClasses.open];
//     }
//     return ( 
//         <Aux>
//             <Backdrop show={props.open} clicked={props.closed} />
//             <div className={attachedClasses.join(' ')}>
//                 <div className={cssClasses.Logo}>
//                     <Logo/>
//                 </div>
//                 <nav>
//                     <NavigationItems/>
//                 </nav>

//             </div>
//         </Aux>

//      );
// }
// export default sideDrawer;