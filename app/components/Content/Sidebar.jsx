import React from 'react';
import { Link, IndexLink } from 'react-router';

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <img className="img-responsive" src="img/ipad.png" alt="" />
        <h4>Sidebar</h4>
          <ul>
            <li><Link to="">Signup</Link></li>
            <li><Link to="">Login</Link></li>
            <li><Link to="">Dashboard</Link></li>
            <li><Link to="">Setings</Link></li>
            <li><Link to="">Logout</Link></li>
          </ul>
      </div>
    );
  }
}

module.exports = Sidebar;
