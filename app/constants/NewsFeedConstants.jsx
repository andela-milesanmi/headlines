import keyMirror from 'key-mirror';
// const NewsFeedConstants = {
//   GET_ARTICLES: 'GET_ARTICLES',
//   GET_SOURCES: 'GET_SOURCES',
// };

// Define action constants
const actionTypes = keyMirror({
  GET_ARTICLES: null,       // Get the News Articles
  GET_SOURCES: null,    // Get the News Sources
});

export default actionTypes;
