import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Left from "../Left";
import Right from "../Right";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Left />
        <Right />
      </div>
    );
  }
}

export default App;
