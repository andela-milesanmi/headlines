import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Header/Nav.jsx';
import Footer from './Footer/Footer.jsx';

/**
 * Class to display the share component.
 * @extends React.Component
 * @param {*} props - the parent component state values
 * @return {jsx} return the main component.
 */
const Main = props => (
  <div>
    <Nav />
    {props.children}
    <Footer />
  </div>
);

/**
 * Set the PropTypes for Main component
 */
Main.propTypes = {
  children: PropTypes.element,
};

export default Main;
