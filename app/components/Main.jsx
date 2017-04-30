import React, { Component } from 'react';
import Nav from './Header/Nav';
import Footer from './Footer/Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Main;
