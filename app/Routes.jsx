import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import Main from './components/Main';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

// Define routes

const routes = (
  <Route path="/" component={About}>
    <Route path="about" component={About} />
    <Route path="examples" component={Contact} />
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
