import React from 'react';
import createHistory from 'history/createBrowserHistory';
import user from './userModel';

const history = createHistory({
  forceRefresh: true,
});

class Logout extends React.Component {
  componentWillMount() {
    if (user.isLogin) {
      user.logOut();
      history.push('/#/login');
      window.location.reload();
    } else {
      history.push('/#/login');
    }
  }
}

export default Logout;
