import React from 'react';
import Aux from '../../../wrappers/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const summIngredients = Object.keys(props.ingredients)
    .map((igKey) => (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}:</span>  {props.ingredients[igKey]}
      </li>
    ));
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>
        {summIngredients}
      </ul>
      <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.cancelPurchase}>Cancel</Button>
      <Button btnType="Success" clicked={props.continuePurchase}>Continue</Button>
    </Aux>
  );
};

export default orderSummary;
