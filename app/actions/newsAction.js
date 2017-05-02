import axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsFeedConstants from '../constants/NewsFeedConstants';

const NewsAction = {
  // Fetch the News Sources
  getSources: () => {
    const lang = 'en';
    axios(`https://newsapi.org/v1/sources?${lang}`).then((res) => {
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
      const requestUrl = `https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${query}`;
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
