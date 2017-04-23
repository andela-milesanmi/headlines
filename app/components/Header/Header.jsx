import React from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
  render() {

    return (
      <div className="intro-header">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>Mai Headlines</h1>
                <h3>Find the news that makes your day...</h3>
                <hr className="intro-divider" />
                <ul className="list-inline intro-social-buttons">
                  <li>
                    <a className="btn btn-default btn-lg">
                      <i className="fa fa-twitter fa-fw" /> <span className="network-name">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-default btn-lg">
                      <i className="fa fa-github fa-fw" /> <span className="network-name">Github</span>
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-default btn-lg">
                      <i className="fa fa-linkedin fa-fw" /> <span className="network-name">Linkedin</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Header;
