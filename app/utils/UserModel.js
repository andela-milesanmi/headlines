import Cookies from 'js-cookie';

/**
 * @class User
 */
class User {
  constructor() {
    this.isLogin = this.userDetails();
  }

  /**
   * @description  logs the user in.
   * @param {any} response an object containing user profile
   * @returns {undefined} it returns no value
   */
  login(response) {
    const user = response.w3;
    Cookies.set('mai-headlines', {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    });
    this.userDetails();
    this.isLogin = true;
  }

  /**
   * @returns {*} returns updated cookie storage
   */
  logOut() {
    this.isLogin = false;
    Cookies.remove('mai-headlines');
  }

  /**
   * @description assigns User values
   * @returns {boolean} returns true or false
   */
  userDetails() {
    if (Cookies.get('mai-headlines')) {
      const userDetails = JSON.parse(Cookies.get('mai-headlines'));
      this.name = userDetails.name;
      this.email = userDetails.email;
      this.imageUrl = userDetails.imageUrl;
      return true;
    }
    return false;
  }
}
const user = new User();

export default user;
