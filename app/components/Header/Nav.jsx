import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
  render() {
    const headerStyles = {
      marginBottom: '30px',
    };

    return (
      <div>
        <div className="header" style={headerStyles}>
          <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</IndexLink>
          <Link to="about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
          <Link to="/contact" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Contact</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
