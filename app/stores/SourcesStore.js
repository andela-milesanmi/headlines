import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes.jsx';

const CHANGE_EVENT = 'change';

/**
 * @class SourceStore
 * @extends {EventEmitter}
 */
class SourceStore extends EventEmitter {
  /**
   * Creates an instance of SourceStore.
   * @param {*}
   * @memberof SourceStore
   */
  constructor() {
    super();
    this.sources = [];
  }

  /**
   * @returns {object} returns list of news sources
   * @memberof SourceStore
   */
  getAll() {
    return this.sources;
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

const SourcesStore = new SourceStore();

AppDispatcher.register((payloads) => {
  switch (payloads.actionType) {
    case ActionTypes.GET_SOURCES:
      SourcesStore.sources = [...payloads.content];
      SourcesStore.emitChange();
      break;
    default:
      break;
  }
  return true;
});

export default SourcesStore;
