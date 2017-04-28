import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsFeedConstants from '../constants/NewsFeedConstants';

const CHANGE_EVENT = 'change';

const SourcesStore = assign({}, EventEmitter.prototype, {
  sources: [],

  // Accessor method
  getAll() {
    return this.sources;
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

AppDispatcher.register((payloads) => {
  console.log('payloads', payloads);
  switch (payloads.actionType) {
    case NewsFeedConstants.GET_SOURCES:
      SourcesStore.sources = [...payloads.content];
      SourcesStore.emitChange();
      break;
    default:
      break;
  }
});

export default SourcesStore;
