import expect from 'expect';
import SourcesStore from '../../stores/SourcesStore.jsx';
import Dispatcher from '../../dispatcher/AppDispatcher';
import ActionTypes from '../../constants/ActionTypes.jsx';
import { fetchedSources } from '../testData';

describe('Application Source store', () => {
  const sources = [];

  it('should exists', () => {
    expect(SourcesStore).toExist();
  });

  it('should instantiate correctly', () => {
    expect(typeof SourcesStore).toBe('object');
  });

  it('should instantiate correctly', () => {
    expect(typeof SourcesStore.sources).toBe('object');
  });

  it('should have an emit change listener method', () => {
    expect(SourcesStore.emitChange).toExist();
  });

  it('should have an emit change listener that is a function', () => {
    expect(typeof SourcesStore.emitChange).toBe('function');
  });

  it('should have a change listener method', () => {
    expect(SourcesStore.addChangeListener).toExist();
  });

  it('should have a change listener that is a function', () => {
    expect(typeof SourcesStore.addChangeListener).toBe('function');
  });

  it('should have a remove change listener method', () => {
    expect(SourcesStore.removeChangeListener).toExist();
  });

  it('should have a remove change listener that is a function', () => {
    expect(typeof SourcesStore.removeChangeListener).toBe('function');
  });

  it('should receive sources from Dispatcher', () => {
    const actual = SourcesStore.getAll();
    const expected = sources;
    expect(actual).toEqual(expected);
  });

  it('should be initialized as an empty array', () => {
    const actual = SourcesStore.sources;
    expect(actual).toEqual([]);
  });

  it('should receive some fetched sources from Dispatcher', () => {
    Dispatcher.dispatch({
      actionType: ActionTypes.GET_SOURCES,
      content: fetchedSources,
    });
    const actual = SourcesStore.getAll();
    const expected = fetchedSources;
    expect(actual).toEqual(expected);
  });

  it('should return empty array when an invalid source is searched', () => {
    Dispatcher.dispatch({
      actionType: ActionTypes.GET_SOURCES,
      content: ''
    });
    const actual = SourcesStore.getAll();
    const expected = [];
    expect(actual).toEqual(expected);
  });

  it('should have an emit function', () => {
    expect(typeof SourcesStore.emit).toBe('function');
  });

  it('should have an on function', () => {
    expect(typeof SourcesStore.on).toBe('function');
  });

  it('should have an remove Listener function', () => {
    expect(typeof SourcesStore.removeListener).toBe('function');
  });
});
