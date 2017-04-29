import React, { Component } from 'react';
import Products from '../containers/products';
import ShoppingCart from '../containers/shoppingCart';

class App extends Component {
  render() {
    return (
      <div>
          <h2>Welcome to our shop</h2>
          <Products/>
          <ShoppingCart/>
      </div>
    );
  }
}

export default App;
