import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { CURRENT_USER } from './utils/static';

const user = localStorage.getItem(CURRENT_USER);
console.log(user);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);

serviceWorker.unregister();
