import axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes.jsx';

const baseUrl = 'https://newsapi.org/v1/';

const NewsAction = {
  /**
   * function to fetch news sources from the newsapi.
   * @returns {*} - object containing the list of news sources via dispatcher
   */
  getSources: () => {
    axios(`${baseUrl}sources`).then((res) => {
      if (res.data.message) {
        throw new Error(res.data.message);
      } else {
        AppDispatcher.dispatch({
          actionType: ActionTypes.GET_SOURCES,
          content: res.data.sources,
        });
      }
    }).catch((error) => {
      throw new Error(error);
    });
  },

  /**
   * class to fetch news articles an handle sorting.
   * @param {request} request - the source news sources
   * @param {sortRequest} sortRequest - the sort bys that are available
   * @returns {*} - object containing the list of articles via dispatcher
   */
  getArticles: (request = '', sortRequest) => {
    const sourcesRequest = request.split('?')[0];
    const sortByRequest = request.split('?')[1];
    let query = '';
    if (sortRequest) {
      query = `${sourcesRequest}&sortBy=${sortRequest}`;
    } else {
      query = sourcesRequest;
    }

    if (request !== undefined) {
      const apiKey = process.env.APIKEY;
      const requestUrl = `${baseUrl}articles?apiKey=${apiKey}&source=${query}`;
      axios.get(requestUrl).then((res) => {
        if (res.data.message) {
          throw new Error(res.data.message);
        } else {
          AppDispatcher.dispatch({
            actionType: ActionTypes.GET_ARTICLES,
            content: res.data,
          });
          AppDispatcher.dispatch({
            actionType: ActionTypes.GET_SORTBYS,
            content: sortByRequest,
          });
        }
      });
    }
  },
};

export default NewsAction;
