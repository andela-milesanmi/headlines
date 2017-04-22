import axios from 'axios';
import NewsFeedActions from '../actions/NewsAction';

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
  getSources() {
    // const options = [];
    const lang = 'en';
    axios(`https://newsapi.org/v1/sources?${lang}`).then((res) => {
      if (res.data.message) {
        console.log('NewsfeedAPI getSources', res.data.message);
        throw new Error(res.data.message);
      } else {
        console.log('NewsfeedAPI getSources', res.data.sources);
        const newsSources = res.data.sources;
        NewsFeedActions.getSources(newsSources);
      }
    }, (res) => {
      console.log('NewsfeedAPI getSources', res.data.message);
      throw new Error(res.data.message);
    });
  },

  getArticles(source) {
    // const options = [];
    // const lang = 'en';
    // const requestUrl = `https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${source}`;
    axios(`https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${source}`).then((res) => {
      if (res.data.message) {
        console.log('NewsfeedAPI getArticles', res.data.message);
        throw new Error(res.data.message);
      } else {
        console.log('NewsfeedAPI getArticles', res.data.data);
        const articles = res.data;
        NewsFeedActions.getArticles(articles);
      }
    }, (res) => {
      console.log('NewsfeedAPI getArticles', res.data.message);
      throw new Error(res.data.message);
    });
  },
};
