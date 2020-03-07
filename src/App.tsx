import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Head from './component/Head';
import PostListPage from './page/PostListPage';

function App() {
  return (
    <>
      <Head />
      <Switch>
        <Route path="/:category?" component={PostListPage} exact />
      </Switch>
    </>
  );
}

export default App;
