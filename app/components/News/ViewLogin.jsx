import React from 'react';
import GoogleLogin from 'react-google-login';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  forceRefresh: true,
});

class Login extends React.Component {
  componentWillMount() {
    // if (user.isLogin) {
    //   history.push('/');
    // }
  }

  render() {
    const responseGoogle = (response) => {
      //  WRITE A FUNCTION
      console.log(response);
    };
    return (
      <div>
        <GoogleLogin
          className="Login"
          clientId="Hi"     // WHAT IS THIS?
          buttonText="Login"
          uxMode="popup"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        >
          <span>Login with Google</span>
        </GoogleLogin>
      </div>
    );
  }
}

export default Login;
