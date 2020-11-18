import React from 'react';

import cssClasses from './order.css';

const order = (props) => {
  const ingredients = [];

  for (let index = 0; index < props.ingredients.length; index += 1) {
    const element = props.ingredients[index];
    ingredients.push({
      name: index,
      amount: element,
    });
  }

  const ingredientsOutPut = ingredients.map((ing) => (
    <span
      key={ing.name}
      style={{
        textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', border: '1px solid #ccc', padding: '5px',
      }}
    >{ing.name} ({ing.amount})
    </span>
  ));
  return (
    <div className={cssClasses.Order}>
      <p>Ingedients: {ingredientsOutPut}</p>
      <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  );
};

export default order;
