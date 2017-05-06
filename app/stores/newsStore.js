import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsFeedConstants from '../constants/NewsFeedConstants';

const CHANGE_EVENT = 'change';

const NewsStore = assign({}, EventEmitter.prototype, {
  articles: [],
  articlesSource: '',
  articlesSortBy: '',

  // Accessor method
  getAll() {
    return this.articles;
  },
  getSourceValue() {
    return this.articlesSource;
  },
  getSourceSortBy() {
    return this.articlesSortBy;
  },

  // Emit Change event
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  // Add change listener
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  // Remove change listener
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register((payload) => {
  switch (payload.actionType) {
    case NewsFeedConstants.GET_ARTICLES:
      // console.log('payload.content.sortBy', payload.content.source);
      NewsStore.articles = [...payload.content.articles];
      NewsStore.articlesSource = payload.content.source;
      NewsStore.articlesSortBy = payload.content.sortBy;
      NewsStore.emitChange();
      break;
    default:
      break;
  }
});

export default NewsStore;
