import React from 'react';

import cssClasses from './order.css';

const order = (props) => {
    const ingredients = [];

    for (const ing in props.ingredients) {
            const element = props.ingredients[ing];
            ingredients.push({
                name: ing,
                amount: element
            });
    }

    const ingredientsOutPut = ingredients.map(ing => {
        return <span key={ing.name} style={{textTransform: 'capitalize', display: 'inline-block', margin:'0 8px', border: '1px solid #ccc', padding:'5px'}}>{ing.name} ({ing.amount})</span>
    });
    console.log(props);
    return ( 
        <div className={cssClasses.Order}>        
            <p>Ingedients: {ingredientsOutPut}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
}
 
export default order;