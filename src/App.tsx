import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import PostListPage from './page/PostListPage';

function App({ user }: any) {
  return (
    <>
      <Navbar user={user} />
      <Switch>
        <Route path="/:category?" component={PostListPage} exact />
      </Switch>
    </>
  );
}

export default App;
