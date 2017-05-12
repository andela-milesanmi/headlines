import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes.jsx';

const CHANGE_EVENT = 'change';

/**
 * @class NewStore
 * @extends {EventEmitter}
 */
class NewStore extends EventEmitter {
  /**
   * Creates an instance of SourceStore.
   * @memberof NewStore
   */
  constructor() {
    super();
    /**
     * Instantiate the needed parameters
     */
    this.articles = [];
    this.articlesSource = '';
    this.articlesSortBy = '';
  }

  /**
   * @returns {object} returns list of news sources
   * @memberof SourceStore
   */
  getAll() {
    return this.articles;
  }
  getSourceValue() {
    return this.articlesSource;
  }
  getSourceSortBy() {
    return this.articlesSortBy;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const NewsStore = new NewStore();

/**
 * Method to register with dispatcher
*/
AppDispatcher.register((payload) => {
  switch (payload.actionType) {
    case ActionTypes.GET_ARTICLES:
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
