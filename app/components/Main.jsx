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
      <div class="container col 12 m10 center">
        <Nav />
        <div class="container">
          <div class="section">
            <div className="row">
              {this.props.children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
