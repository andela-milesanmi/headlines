import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Header/Nav';
import Header from './Header/Header';
import Sidebar from './Content/Sidebar';
// import MainContent from './Content/Content';
import Footer from './Footer/Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className="content-section-a">

          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-9">
                {this.props.children}
              </div>
              <div className="col-lg-5 col-sm-3">
                <Sidebar />
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
