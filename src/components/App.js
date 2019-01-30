import React, { Component } from 'react';
import Header from '../shared/components/layout/Header';

import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
