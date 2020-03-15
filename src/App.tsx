import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import PostListPage from './page/PostListPage';
import ProfilePage from './page/ProfilePage';
import WritePage from './page/WritePage';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/:category?" component={PostListPage} exact />
        <Route page="/@:username" component={ProfilePage} />
        <Route page="/write" component={WritePage} />
      </Switch>
    </>
  );
}

export default App;
