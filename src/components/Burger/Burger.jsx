import React from 'react';
import cssClasses from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';


const burger = (props) => {
    const ingredients = Object.keys(props.ingredients).map(ing => {
        return [...Array(props.ingredients[ing])].map((_, i) => <BurgerIngredient key={ing + i} type={ing} />)
    });

    return (
        <div className={cssClasses.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;