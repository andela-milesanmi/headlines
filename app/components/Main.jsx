import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Header/Nav';
import Footer from './Footer/Footer';

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
