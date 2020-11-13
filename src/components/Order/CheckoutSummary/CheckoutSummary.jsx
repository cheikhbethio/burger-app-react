import React from 'react';
import Burger from '../../Burger/Burger.jsx'
import Button from '../../UI/Button/Button.jsx';
import cssClasses from './CheckoutSummary.css';


const checkoutSummary = (props) => {
    return ( 
        <div className={cssClasses.CheckoutSummary}>
            <h1>We hopes it tastes well!!</h1>
            <div style={{width: '100%', height: '300px',margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
                <Button btnType="Danger" clicked={props.cancelCheckout}>Cancel</Button>
                <Button btnType="Success" clicked={props.continueCheckout}>Continue</Button>
            </div>
        </div>
     );
}
 
export default checkoutSummary;