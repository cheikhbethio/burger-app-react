import React from 'react'
import Aux from '../../../wrappers/Wrapper';
import cssClasses from './Modal.css'
import Backdrop from '../Backdrop/Backdrop.jsx';


const modal = (props) => {
    return (  
        <Aux>
            <Backdrop show={props.show}/>
            <div 
                className={cssClasses.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                >
                {props.children}
            </div>
        </Aux>
    );
}
 
export default modal;