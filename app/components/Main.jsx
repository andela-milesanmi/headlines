import React, { Component } from 'react';
import Nav from './Header/Nav';
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
