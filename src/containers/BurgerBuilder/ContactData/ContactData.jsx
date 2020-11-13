import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import cssClasse from './ContactData.css';
import axios from '../../../axios-order.js'
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = { 
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Moussa',
                address: {
                    street: 'rue eugene',
                    zipCode: '33000',
                    country: 'france'
                },
                email: 'add@sds.sd'
            },
            deleveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false });
                this.props.history.push('/')
            })
            .catch(error => this.setState({ loading: false }));
    }

    render() { 
        let form = (
            <form>
                <input className= {cssClasse.Input} type="text" name="name" placeholder="name"/>
                <input className= {cssClasse.Input} type="email" name="email" placeholder="email"/>
                <input className= {cssClasse.Input} type="text" name="street" placeholder="street"/>
                <input className= {cssClasse.Input} type="text" name="postalCode" placeholder="postalCode"/>
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner/>
        }
        return ( 
            <div className={cssClasse.ContactData}>
                <h4>Give your contacts Data</h4>
                {form}
            </div>
        );
    }
}
 
export default ContactData;