import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import Home from './components/Pages/Home';
// import About from './components/Pages/About';
import ViewNews from './components/News/ViewNews';
import Login from './components/Login';
import Logout from './components/Logout';
import user from './components/userModel';

function requireAuth(nextState, replace) {
  if (!user.isLogin) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

function checkAuth(nextState, replace) {
  if (user.isLogin) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

const app = document.getElementById('app');

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Main} onEnter={requireAuth}>
        <IndexRoute component={Home} />
        <Route path="/news/:source/:sortby" component={ViewNews} />
      </Route>
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
    </Router>
  </div>,
  app,
);
