import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import  classes from './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/Checkout/checkout';
import  Layout  from './components/Layout/layout';
import orders from './containers/orders/orders';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Route path= '/orders' component = {orders}/>
          <Route path="/checkout" component={CheckOut} />
          <Route path= '/' exact component = {BurgerBuilder}/>
        </Layout>
      </div>
    );
  }
}

export default App;
