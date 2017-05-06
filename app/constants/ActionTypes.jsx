import keyMirror from 'key-mirror';

/**
 * Define action constants
*/
const ActionTypes = keyMirror({
  GET_ARTICLES: 'GET_ARTICLES',   // Get the News Articles
  GET_SOURCES: 'GET_SOURCES',    // Get the News Sources
  GET_SORTBYS: 'GET_SORTBYS',    // Get the News Sources
});

export default ActionTypes;
