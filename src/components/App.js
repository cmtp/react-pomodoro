import React from 'react';
import { element } from 'prop-types';

import Header from '../shared/components/layout/Header/Header';
import Content from '../shared/components/layout/Content/Content';

import './App.css';

const App = props => (
  <div className="App">
    <Header />
    <Content>{props.children}</Content>
  </div>
);

App.propTypes = {
  children: element,
};

export default App;
