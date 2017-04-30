import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer teal">
        <div className="footer-copyright">
          <div className="container">
            <p className="copyright text-muted">
              Copyright &copy; <a className="brown-text text-lighten-4">Maranatha A. Ilesanmi</a>, 2017 | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
