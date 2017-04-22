import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
// import 'bootstrap/scss/bootstrap.scss';
import Main from './components/Main';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

const app = document.getElementById('app');

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        {/*<Route path="/articles/:id&:sort" component={ ViewNews } />*/}
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router>
  </div>,
  app
);
