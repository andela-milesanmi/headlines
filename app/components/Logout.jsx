import React from 'react';
import createHistory from 'history/createBrowserHistory';
import user from './userModel';

const history = createHistory({
  forceRefresh: true,
});

/**
 * Class displaying Logout Page
 * @extends React.Component
 */
class Logout extends React.Component {
  componentWillMount() {
    /**
     * Log the user out when visited
     * @return {null} redirects user to login page
     */
    if (user.isLogin) {
      user.logOut();
      history.push('/#/login');
      global.window.location.reload();
    } else {
      history.push('/#/login');
    }
  }
}

export default Logout;
