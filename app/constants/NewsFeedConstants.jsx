import keyMirror from 'key-mirror';

/**
 * Define action constants
*/
const actionTypes = keyMirror({
  GET_ARTICLES: null,   // Get the News Articles
  GET_SOURCES: null,    // Get the News Sources
  GET_SORTBYS: null,    // Get the News Sources
});

export default actionTypes;
