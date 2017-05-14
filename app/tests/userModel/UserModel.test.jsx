import expect from 'expect';
import User from '../../utils/UserModel';
import { Response } from '../testData';

describe('test for user model', () => {
  it('should exist', () => {
    expect(typeof User).toBe('object');
  });
  it('should log the User in', () => {
    User.login(Response);
    expect(User.isLogin).toEqual(true);
  });
  it('it should log out the User', () => {
    User.logOut();
    expect(User.isLogin).toEqual(false);
  });
});
