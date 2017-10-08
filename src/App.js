import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Finances from './Finances.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to your Financial Future!</h1>
          <h3 className="Paranth"> (hypothetically speaking . . .) </h3>
        </header>
        <p className="App-intro">
          To get started, start by telling me your <code>name</code> (or not. . .)
        </p>
        <Finances />
      </div>
    );
  }
}

export default App;
