import axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsFeedConstants from '../constants/NewsFeedConstants';

const NewsAction = {
  // Fetch the News Sources
  getSources: () => {
    // const options = [];
    const lang = 'en';
    axios(`https://newsapi.org/v1/sources?${lang}`).then((res) => {
      if (res.data.message) {
        throw new Error(res.data.message);
      } else {
        // console.log(`Got the sources. ${res.data.sources}`);
        // console.log('I am from the Actions file ' + res.data.sources);
        // NewsAction.getSources(newsSources);

        AppDispatcher.dispatch({
          actionType: NewsFeedConstants.GET_SOURCES,
          content: res.data.sources,
        });
        console.log('got the sources! in newsAction', res.data);
      }
    }, (res) => {
      console.log(res.data.message);
      throw new Error(res.data.message);
    });
  },

  getArticles: (source) => {
    console.log('Source to pass into newsAction getArticles', source);
    const requestUrl = `https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${source}`;
    axios.get(requestUrl).then((res) => {
      if (res.data.message) {
        throw new Error(res.data.message);
      } else {
        AppDispatcher.dispatch({
          actionType: NewsFeedConstants.GET_ARTICLES,
          content: res.data,
        });
        // REMOVE THE CONSOLE.LOG SOONEST
        console.log('got the articles! in newsAction', res.data);
        // return this.articles;
      }
    })
    .catch((error) => {
      console.log(error);
      // throw new Error(res.data.status);
    });
  },
};

export default NewsAction;
