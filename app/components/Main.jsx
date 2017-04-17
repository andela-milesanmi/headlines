import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Header/Nav';
import Footer from './Footer/Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <h4>Main Component</h4>
        <header className="primary-header">
          <h4>Nav Component</h4>
          <Nav />
        </header>
        <main>
          <h4>Main Content Area</h4>
          {this.props.children}
        </main>
        <aside className="primary-aside">
          <h4>Sidebar Component</h4>
          <ul>
            <li><Link to="">Signup</Link></li>
            <li><Link to="">Login</Link></li>
            <li><Link to="">Dashboard</Link></li>
            <li><Link to="">Setings</Link></li>
            <li><Link to="">Logout</Link></li>
          </ul>
        </aside>
        <footer>
          <h4>Footer Component</h4>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Main;
