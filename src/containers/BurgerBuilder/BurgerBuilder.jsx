import React, { Component } from 'react';
import Aux from '../../wrappers/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order.js';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    handlerPurchasing = () => {
        this.setState({ purchasing: true });
        console.log("BurgerBuilder -> render -> this.state", this.state);
    }

    upadtePurchaseable(ingredients) {
        const purchaseable = Object.values(ingredients).some(val => val > 0);
        this.setState({ purchaseable: purchaseable });
    }
    addIngredientHander = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
        })
        this.upadtePurchaseable(updatedIngredients)
    }
    removeIngredientHander = (type) => {
        if (this.state.ingredients[type] < 1) {
            return;
        }
        const updatedCount = this.state.ingredients[type] - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
        })
        this.upadtePurchaseable(updatedIngredients)

    }

    cancelPurchase = () => {
        this.setState({ purchasing: false });
    }
    continuePurchase = () => {
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Moussa',
                address: {
                    street: 'rue eugen',
                    zipCode: '33000',
                    contry: 'france'
                },
                email: 'add@sds.sd'
            },
            deleveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(res => this.setState({ loading: false, purchasing: false }))
            .catch(error => this.setState({ loading: false, purchasing: false }))
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = <OrderSummary
            totalPrice={this.state.totalPrice}
            cancelPurchase={this.cancelPurchase}
            continuePurchase={this.continuePurchase}
            ingredients={this.state.ingredients} />;
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHander}
                    ingredientRemoved={this.removeIngredientHander}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    handlerPurchasing={this.handlerPurchasing}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;