// import expect from 'expect';
// import NewsAction from '../../actions/newsAction';

// describe('the news-action', () => {
//   // beforeEach(function () {
//   // });
//   console.log('storeInstance', SourcesStore.getAll);
//   it('should instantiate correctly', () => {
//     expect(typeof SourcesStore).toBe('object');
//     expect(typeof SourcesStore.sources).toBe('object');
//   });
// });

import mockedAxios from './apiMockCall';
import NewsActionTypes from '../../constants/NewsFeedConstants';
import NewsDispatcher from '../../dispatcher/AppDispatcher';
import NewsActions from '../../actions/newsAction';

describe('#getNews() using Promises', () => {
  let testAction;
  beforeEach(() => {
    jest.mock('axios', () => mockedAxios);
    testAction = jest.spyOn(NewsDispatcher, 'dispatch');
  });

  afterEach(() => {
    testAction.mockReset();
  });

  it('should load news data', () => NewsActions.getNews('bbcnews')
    .then(() => {
      const arg = testAction.mock.calls[0][0];
      expect(testAction).toHaveBeenCalled();
      expect(arg.eventName).toEqual(NewsActionTypes.GET_NEWS);
      expect(arg.news).toBeInstanceOf(Object);
      expect(arg.news[0].meta).toEqual('BBC News');
    }));
});