/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cssClasses from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={cssClasses.BreadBottom} />;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={cssClasses.BreadTop}>
            <div className={cssClasses.Seeds1} />
            <div className={cssClasses.Seeds2} />
          </div>
        );
        break;
      case ('meat'):
        ingredient = (<div className={cssClasses.Meat} />);
        break;
      case ('cheese'):
        ingredient = (<div className={cssClasses.Cheese} />);
        break;
      case ('salad'):
        ingredient = (<div className={cssClasses.Salad} />);
        break;
      case ('bacon'):
        ingredient = (<div className={cssClasses.Bacon} />);
        break;

      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};
export default BurgerIngredient;
