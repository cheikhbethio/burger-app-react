import React, { Component } from 'react';
import Aux from '../../wrappers/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order.js';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../wrappers/WithErrorHandler/WithErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }
    componentDidMount() {
        axios.get('https://react-burger-app-79516.firebaseio.com/ingredients.json')
            .then(res => {
                this.setState({ingredients: res.data})
            })
            .catch(error => {
                this.setState({error: true})
            });
    }
    handlerPurchasing = () => {
        this.setState({ purchasing: true });
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
        // this.setState({ loading: true })
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Moussa',
        //         address: {
        //             street: 'rue eugene',
        //             zipCode: '33000',
        //             country: 'france'
        //         },
        //         email: 'add@sds.sd'
        //     },
        //     deleveryMethod: 'fastest'
        // };
        // axios.post('/orders.json', order)
        //     .then(res => this.setState({ loading: false, purchasing: false }))
        //     .catch(error => this.setState({ loading: false, purchasing: false }));
        const queryParams = [];
        for (const key in this.state.ingredients) {
            queryParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.state.ingredients[key]));
        }
        queryParams.push('price=' +  this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>ingredients can'nt be loaded</p> : <Spinner/>;

        if(this.state.ingredients){
            burger = (
                <Aux>
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
                    );
            orderSummary = <OrderSummary
                totalPrice={this.state.totalPrice}
                cancelPurchase={this.cancelPurchase}
                continuePurchase={this.continuePurchase}
                ingredients={this.state.ingredients} />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} closeModal={this.cancelPurchase}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default WithErrorHandler(BurgerBuilder, axios);