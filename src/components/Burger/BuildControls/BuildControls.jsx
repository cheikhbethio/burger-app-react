import React from 'react';
import cssClasses from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Chesse', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
    return (
        <div className={cssClasses.BuildControls}>
            {controls.map((element, index) =>
                <BuildControl
                    key={element.label + index}
                    label={element.label}
                    add={() => props.ingredientAdded(element.type)}
                    remove={() => props.ingredientRemoved(element.type)}
                />)}
        </div>
    )
};
export default buildControls