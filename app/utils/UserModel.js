import Cookies from 'js-cookie';

/**
 * @class User
 */
class User {
  constructor() {
    this.userDetails = Cookies.get('mai')
      === undefined ? undefined : JSON.parse(Cookies.get('mai'));
    this.isLogin = this.isLoggedIn();
    this.favorites = '';
    this.name = '';
    this.imageUrl = '';
    this.email = '';
    this.assignUserValues();
  }

  /**
   * @param {*} response the user data from
   * @returns {object} returns cookies storage login data
   */
  login(response) {
    const user = response.w3;
    Cookies.set('mai', {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    });
    this.userDetails = {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    };
  }
  /**
   * Method to check login status
   * @returns {*} the logged in user details
   */
  isLoggedIn() {
    return !(this.userDetails === undefined);
  }

  /**
   * @returns {*} returns user details
   */
  assignUserValues() {
    if (this.isLogin) {
      this.favorites = this.userDetails.favorites;
      this.name = this.userDetails.name;
      this.email = this.userDetails.email;
      this.imageUrl = this.userDetails.imageUrl;
    }
  }

  /**
   * @param {*} item - the favourite item
   * @param {*} index - the index of the favoutire item
   * @returns {object} returns updated list of favourite items
   */
  removeFavourite(item, index) {
    this.favorites.splice(index, 1);
  }

  /**
   * @returns {*} returns updated cookie storage
   */
  logOut() {
    this.isLogin = false;
    Cookies.remove('mai');
  }
}
const user = new User();

export default user;
