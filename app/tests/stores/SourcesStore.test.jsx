import expect from 'expect';
import SourcesStore from '../../stores/SourcesStore';
import Dispatcher from '../../dispatcher/AppDispatcher';
import ActionTypes from '../../constants/ActionTypes.jsx';

describe('Application Source store', () => {
  const sources = [];

  const fetchedSources = [
    { id: 'abc-news-au', name: 'ABC News (AU)', category: 'general', sortBysAvailable: ['top'] },
    { id: 'al-jazeera-english', name: 'Al Jazeera English', category: 'general', sortBysAvailable: ['top'] },
    { id: 'ars-technica', name: 'Ars Technica', category: 'technology', sortBysAvailable: ['top'] },
    { id: 'associated-press', name: 'Associated Press', category: 'general', sortBysAvailable: ['top'] },
    { id: 'bbc-news', name: 'BBC News', category: 'general', sortBysAvailable: ['top'] },
    { id: 'bbc-sport', name: 'BBC Sport', category: 'sport', sortBysAvailable: ['top'] },
  ];

  it('should exists', () => {
    expect(SourcesStore).toExist();
  });

  // console.log(ActionTypes.GET_SOURCES, "GET SOURCES ACTION TYPES");
  // Dispatcher.dispatch({
  //   actionType: ActionTypes.GET_SOURCES,
  //   sources,
  // });
  // Dispatcher.register({
  //   actionType: ActionTypes.GET_SOURCES,
  //   sources,
  // });

  it('should receive sources from Dispatcher', () => {
    const actual = SourcesStore.getAll();
    const expected = sources;
    expect(actual).toEqual(expected);
  });

  it('should instantiate correctly', () => {
    expect(typeof SourcesStore).toBe('object');
    expect(typeof SourcesStore.sources).toBe('object');
  });

  it('should ', () => {
  });
});
