import expect from 'expect';
import NewsStore from '../../stores/NewsStore';
import Dispatcher from '../../dispatcher/AppDispatcher';
import ActionTypes from '../../constants/ActionTypes.jsx';
import { fetchedArticles } from '../testData';

describe('News store', () => {
  const articles = [];

  it('should exists', () => {
    expect(NewsStore).toExist();
  });

  it('should have an emit function', () => {
    expect(typeof NewsStore.emit).toBe('function');
  });

  it('should instantiate correctly', () => {
    expect(typeof NewsStore).toBe('object');
  });

  it('should instantiate the articles correctly', () => {
    expect(typeof NewsStore.articles).toBe('object');
  });

  it('should instantiate the articles source correctly', () => {
    expect(NewsStore.articlesSource).toBe('');
  });

  it('should have an article source that is a string', () => {
    expect(typeof NewsStore.articlesSource).toBe('string');
  });

  it('should instantiate the article sort by correctly', () => {
    expect(NewsStore.articlesSortBy).toBe('');
  });

  it('should have an article sort by that is a string', () => {
    expect(typeof NewsStore.articlesSortBy).toBe('string');
  });

  it('should have an emit change listener method', () => {
    expect(NewsStore.emitChange).toExist();
  });

  it('should have a emit change listener that is a function', () => {
    expect(typeof NewsStore.emitChange).toBe('function');
  });

  it('should have an add change listener method', () => {
    expect(NewsStore.addChangeListener).toExist();
  });

  it('should have an add change listener that is a function', () => {
    expect(typeof NewsStore.addChangeListener).toBe('function');
  });

  it('should have a remove change listener method', () => {
    expect(NewsStore.removeChangeListener).toExist();
  });

  it('should have a remove change listener that is a function', () => {
    expect(typeof NewsStore.removeChangeListener).toBe('function');
  });

  it('should have a get All function', () => {
    expect(typeof NewsStore.getAll).toBe('function');
  });

  it('should have a get Source Value function', () => {
    expect(typeof NewsStore.getSourceValue).toBe('function');
  });

  it('should have a get Source Sort By function', () => {
    expect(typeof NewsStore.getSourceSortBy).toBe('function');
  });

  it('should receive articles from Dispatcher', () => {
    const actual = NewsStore.getAll();
    const expected = articles;
    expect(actual).toEqual(expected);
  });

  it('should be initialized as an empty array', () => {
    const actual = NewsStore.articles;
    expect(actual).toEqual([]);
  });

  it('should receive some fetched sources from Dispatcher', () => {
    Dispatcher.dispatch({
      actionType: ActionTypes.GET_ARTICLES,
      content: fetchedArticles,
    });
    const actual = NewsStore.getAll();
    const expected = fetchedArticles.articles;
    expect(actual).toEqual(expected);
  });

  it('should return mai-news as the current source', () => {
    Dispatcher.dispatch({
      actionType: ActionTypes.GET_ARTICLES,
      content: fetchedArticles,
    });
    const actual = NewsStore.getSourceValue();
    const expected = fetchedArticles.source;
    expect(actual).toEqual(expected);
  });

  it('should return top as the current sort value', () => {
    Dispatcher.dispatch({
      actionType: ActionTypes.GET_ARTICLES,
      content: fetchedArticles,
    });
    const actual = NewsStore.getSourceSortBy();
    const expected = fetchedArticles.sortBy;
    expect(actual).toEqual(expected);
  });
});
