import React from 'react'
import cssClasses from './Button.css';

const button = (props) => {
    return (  
        <button
        onClick={props.clicked}
        className={[cssClasses.Button, cssClasses[props.btnType]].join(' ')}
        > {props.children}</button>
    );
}
 
export default button;