import React, { Component } from 'react';
import ShoppingCart from "./ShoppingCart";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ShoppingCart />    
      </div>
    );
  }
}

export default App;
