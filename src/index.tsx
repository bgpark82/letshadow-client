import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import './index.css';
import rootReducer, { rootSaga } from './modules';
import { tempSetUser } from './modules/user';
import * as serviceWorker from './serviceWorker';
import { CURRENT_USER } from './static/static';

function loadUser() {
  try {
    const user = localStorage.getItem(CURRENT_USER);
    if (!user) return;
    const authUser = JSON.parse(user);
    store.dispatch(tempSetUser(authUser));
  } catch (e) {
    console.log('localStorage is not working');
  }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
