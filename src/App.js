import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import { Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Router>
		<Home path="/"/>
		</Router>
      </div>
    );
  }
}

export default App;
