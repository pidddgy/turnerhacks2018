import React, { Component } from 'react';

import './App.css';

import Map from './components/Map.js'
import RightSideStuff from './components/RightSideStuff.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Map/>
        <RightSideStuff/>
      </div>
    );
  }
}

export default App;

