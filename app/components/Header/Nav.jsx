import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <nav className="blue" role="navigation">
        <div className="nav-wrapper container">
          {/* <a classID="logo-container" href="/" className="brand-logo">Logo</a>*/}
          <IndexLink to="/" classID="logo-container" className="brand-logo">
            Mai Headlines
          </IndexLink>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>

          <ul classID="nav-mobile" className="side-nav">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
          <a href="/#" data-activates="nav-mobile" className="button-collapse">
            <i className="material-icons">Menu</i>
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
