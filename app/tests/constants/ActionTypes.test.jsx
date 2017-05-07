import expect from 'expect';
import ActionTypes from '../../constants/ActionTypes.jsx';

describe('ActionTypes Constant', () => {
  it('should exists', () => {
    expect(ActionTypes).toExist();
  });

  it('should output `GET_ARTICLES` for GET_ARTICLES', () => {
    const actual = ActionTypes.GET_ARTICLES;
    const expected = 'GET_ARTICLES';
    expect(actual).toEqual(expected);
  });

  it('should output `GET_SOURCES` for GET_SOURCES', () => {
    const actual = ActionTypes.GET_SOURCES;
    const expected = 'GET_SOURCES';
    expect(actual).toEqual(expected);
  });

  it('should output `GET_SORTBYS` for GET_SORTBYS', () => {
    const actual = ActionTypes.GET_SORTBYS;
    const expected = 'GET_SORTBYS';
    expect(actual).toEqual(expected);
  });
});
