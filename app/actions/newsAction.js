import axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsFeedConstants from '../constants/NewsFeedConstants.jsx';

const baseUrl = 'https://newsapi.org/v1/';

const NewsAction = {
  // Fetch the News Sources
  getSources: () => {
    axios(`${baseUrl}sources`).then((res) => {
      if (res.data.message) {
        throw new Error(res.data.message);
      } else {
        AppDispatcher.dispatch({
          actionType: NewsFeedConstants.GET_SOURCES,
          content: res.data.sources,
        });
      }
    }).catch((error) => {
      throw new Error(error);
    });
  },

  getArticles: (req = '', sortReq) => {
    const sourcesReq = req.split('?')[0];
    const sortByReq = req.split('?')[1];
    let query = '';
    if (sortReq) {
      query = `${sourcesReq}&sortBy=${sortReq}`;
    } else {
      query = sourcesReq;
    }

    if (req !== undefined) {
      const apiKey = process.env.APIKEY;
      const requestUrl = `${baseUrl}articles?apiKey=${apiKey}&source=${query}`;
      axios.get(requestUrl).then((res) => {
        if (res.data.message) {
          throw new Error(res.data.message);
        } else {
          AppDispatcher.dispatch({
            actionType: NewsFeedConstants.GET_ARTICLES,
            content: res.data,
          });
          AppDispatcher.dispatch({
            actionType: NewsFeedConstants.GET_SORTBYS,
            content: sortByReq,
          });
        }
      });
    }
  },
};

export default NewsAction;
