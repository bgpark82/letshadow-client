import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { CURRENT_USER } from './static/static';

const user = localStorage.getItem(CURRENT_USER);

ReactDOM.render(
  <Router>
    <App user={user} />
  </Router>,
  document.getElementById('root'),
);

serviceWorker.unregister();
