import React from 'react';
import Nav from './Header/Nav';
import Footer from './Footer/Footer';

class Main extends React.Component {
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
