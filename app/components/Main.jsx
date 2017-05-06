import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Header/Nav.jsx';
import Footer from './Footer/Footer.jsx';

const Main = props => (
  <div>
    <Nav />
    {props.children}
    <Footer />
  </div>
);

/**
 * Set the PropTypes for Main
 */
Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
