import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Header/Nav';
// import Header from './Header/Header';
import Sidebar from './Content/Sidebar';
// import MainContent from './Content/Content';
import Footer from './Footer/Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="section">
            <div className="row">
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
