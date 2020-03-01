import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Head from './component/Head';
import LoginPage from './page/LoginPage';
import PostListPage from './page/PostListPage';
import PostPage from './page/PostPage';
import PostRegisterPage from './page/PostRegisterPage';


function App() {
  return (
    <>
    <Head/>
    <Switch>
      <Route path="/" component={PostListPage} exact/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/register" component={PostRegisterPage}/>
      <Route path="/:username" component={PostPage}/>
    </Switch>
    </>
    
  );
}

export default App;
