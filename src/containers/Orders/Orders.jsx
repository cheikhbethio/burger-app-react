/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import WithErrorHandler from '../../wrappers/WithErrorHandler/WithErrorHandler';

class Orders extends Component {
  Orders() {
    this.state = {
      orders: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then((res) => {
        const fetchedOrders = [];
        for (let index = 0; index < res.data.length; index += 1) {
          fetchedOrders.push({
            id: index,
            ...res.data[index],
          });
        }
        // eslint-disable-next-line react/no-unused-state
        this.setState({ loading: false, orders: fetchedOrders });
      })
      // eslint-disable-next-line react/no-unused-state
      .catch(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default WithErrorHandler(Orders, axios);
