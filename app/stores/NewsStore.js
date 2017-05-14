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
   * @returns {object} returns list of news articles
   */
  getAll() {
    return this.articles;
  }
  /**
   * @returns {object} returns list of news sources
   */
  getSourceValue() {
    return this.articlesSource;
  }
  /**
   * @returns {object} returns list of articles sortbys
   */
  getSourceSortBy() {
    return this.articlesSortBy;
  }
  /**
   * @returns {*} listens for change and emits the data to the view
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  /**
   * @callback request Callback
   * @param {callback} callback - the callback that handles event changes
   * @returns {object} add change listener
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  /**
   * @callback request Callback
   * @param {callback} callback - the callback that handles event changes
   * @returns {object} remove change listener
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const NewsStore = new NewStore();

/**
 * @description Method to register with dispatcher
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
