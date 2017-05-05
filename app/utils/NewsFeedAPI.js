import axios from 'axios';
import NewsFeedActions from '../actions/newsAction';

module.exports = {
  getSources() {
    axios('https://newsapi.org/v1/sources?').then((res) => {
      if (res.data.message) {
        throw new Error(res.data.message);
      } else {
        const newsSources = res.data.sources;
        NewsFeedActions.getSources(newsSources);
      }
    }, (res) => {
      throw new Error(res.data.message);
    });
  },

  getArticles(source) {
    axios(`https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${source}`).then((res) => {
      if (res.data.message) {
        throw new Error(res.data.message);
      } else {
        const articles = res.data;
        NewsFeedActions.getArticles(articles);
      }
    }, (res) => {
      throw new Error(res.data.message);
    });
  },
};
