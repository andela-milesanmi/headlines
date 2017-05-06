import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer black">
        <div className="footer-copyright">
          <div className="container">
            <p className="copyright text-muted small">
              Copyright &copy; <a className="brown-text text-lighten-3">Maranatha A. Ilesanmi</a>, 2017 | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
