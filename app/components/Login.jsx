import React from 'react';
import GoogleLogin from 'react-google-login';
import createHistory from 'history/createBrowserHistory';
import user from './userModel';

const history = createHistory({
  forceRefresh: true,
});

class Login extends React.Component {
  componentWillMount() {
    if (user.isLogin) {
      history.push('/');
    }
  }

  render() {
    const responseGoogle = (response) => {
      user.login(response);
      window.location.reload();
    };

    return (
      <div>
        <GoogleLogin
          clientId="618596594933-bums2pfj1l0ah6aei8me0tj8ksdg09sh.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}
export default Login;
