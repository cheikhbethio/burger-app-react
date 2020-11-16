import Axios from 'axios';
import React, { Component } from 'react'

import Order from '../../components/Order/Order'

import axios from "../../axios-order";
import WithErrorHandler from '../../wrappers/WithErrorHandler/WithErrorHandler'


class Orders extends Component {
    state = {
        orders:[],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (const key in res.data) {
                    fetchedOrders.push({
                        id: key,
                        ...res.data[key]
                    });
                }

                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => this.setState({loading: false}))
    }
    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))}
            </div>
        )
    }
}


export default  WithErrorHandler(Orders, axios);