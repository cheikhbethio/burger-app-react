/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../BurgerBuilder/ContactData/ContactData';

class Checkout extends Component {
    state = {
      ingredients: null,
      totalPrice: 0,
    };

    componentWillMount() {
      const query = new URLSearchParams(this.props.location.search);
      const ingredients = {};
      let price = 0;
      for (const key of query.entries()) {
        if (key[0] === 'price') {
          price = key[1];
        } else {
          ingredients[key[0]] = +key[1];
        }
      }
      this.setState({ ingredients, totalPrice: price });
    }

    cancelCheckoutHandler = () => {
      this.props.history.goBack();
    }

    continueCheckoutHandler = () => {
      this.props.history.replace('./checkout/contact-data');
    }

    render() {
      return (
        <div>
          <CheckoutSummary
            ingredients={this.state.ingredients}
            cancelCheckout={this.cancelCheckoutHandler}
            continueCheckout={this.continueCheckoutHandler}
          />
          <Route
            path={`${this.props.match.path}/contact-data`}
            render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...this.props} />)}
          />
        </div>
      );
    }
}

export default Checkout;
