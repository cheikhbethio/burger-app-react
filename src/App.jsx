import React, { Component } from 'react';
import Layout from './components/Layouts/Layout.jsx';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.jsx';
import Checkout from './containers/Checkout/Checkout.jsx';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout}/>
            <Route path='/' exact component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
