import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import AppRoutes from './routes';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

const renderApp = Component => {
  ReactDOM.render(
    <Router>
      <Component />
    </Router>,
    rootElement
  );
};

renderApp(AppRoutes);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
