import React from 'react';
import cssClasses from './Backdrop.css';

const backdrop = (props) => {
    return (props.show ? <div className={cssClasses.Backdrop}></div> : null);
}
 
export default backdrop;