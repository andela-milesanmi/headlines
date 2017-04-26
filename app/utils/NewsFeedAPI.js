import axios from 'axios';
import NewsFeedActions from '../actions/NewsAction';

module.exports = {
  getSources() {
    const lang = 'en';
    axios(`https://newsapi.org/v1/sources?${lang}`).then((res) => {
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
    // const options = [];
    // const lang = 'en';
    // const requestUrl = `https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${source}`;
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
