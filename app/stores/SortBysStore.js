import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsFeedConstants from '../constants/NewsFeedConstants';

const CHANGE_EVENT = 'change';

const SortBysStore = assign({}, EventEmitter.prototype, {
  sortBys: '',

  // Accessor method
  getAll() {
    return this.sortBys;
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
    case NewsFeedConstants.GET_SORTBYS:
      SortBysStore.sortBys = payload.content;
      SortBysStore.emitChange();
      break;
    default:
      break;
  }
});

export default SortBysStore;
