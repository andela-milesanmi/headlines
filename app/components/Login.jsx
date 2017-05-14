import React from 'react';
import GoogleLogin from 'react-google-login';
import createHistory from 'history/createBrowserHistory';
import user from '../utils/UserModel';

/**
 * Returns the Success Message.
 * @param {object} response - Returns the User Profile
 * @return {object} the error message
 */
const history = createHistory({
  forceRefresh: true,
});

/**
 * Class displaying Login Page
 * @extends React.Component
 */
class Login extends React.Component {
  /**
   * Invoked immediately after a component is mounted
   * @return {*} returns the logged in url
   */
  componentWillMount() {
    this.history = history;
    if (user.isLogin) {
      this.history.push('/');
    }
  }

  /**
   * Show the Login Component
   * @return {jsx} Show the login component
   */
  render() {
    const clientId =
    '618596594933-bums2pfj1l0ah6aei8me0tj8ksdg09sh.apps.googleusercontent.com';

    this.clientId = clientId;
    const responseGoogle = (response) => {
      user.login(response);
      global.window.location.reload();
    };
    return (
      <div>
        <nav className="teal">
          <div className="nav-wrapper">
            <a href="" className="brand-logo center">Mai Headlines</a>
          </div>
        </nav>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <h1 className="header center teal-text text-lighten-2">
                Mai Headlines
              </h1>
              <h4 className="header center teal-text text-lighten-2">
                Your home of live news
              </h4>
              <div className="row center">
                <h5 className="header col s12 light">
                  Search through our current set of about 70 sources!!!
                </h5>
              </div>
              <div className="row center">
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login With Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  className="btn-large waves-effect waves-light teal lighten-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
