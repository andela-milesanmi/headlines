import React from 'react';
import { Link, IndexLink } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer blue">
        <div className="footer-copyright">
          <div className="container">
            <p className="copyright text-muted small">
              Copyright &copy; <a className="brown-text text-lighten-3">Maranatha A. Ilesanmi</a>, 2017 | All rights reserved
            </p>
          </div>
        </div>
        {/* <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="list-inline">
                <li>
                  <IndexLink to="/" activeClassName="active">Home</IndexLink>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                  <a href="/logout">Logout</a>
                </li>
              </ul>
              <p className="copyright text-muted small">
                Copyright &copy; Maranatha A. Ilesanmi, 2017 | All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>*/}
      </footer>
    );
  }
}

module.exports = Footer;
