import axios from 'axios';
import NewsFeedActions from '../actions/newsAction';

const baseUrl = 'https://newsapi.org/v1/';

const NewsFeedAPI = {
  /**
   * function to fetch news sources from the newsapi.
   * @returns {*} - object containing the list of news sources
   */
  getSources() {
    axios(`${baseUrl}sources`).then((res) => {
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

  /**
   * class to fetch news articles an handle sorting.
   * @param {*} source - the source news sources
   * @returns {*} - object containing the list of articles based on sources
   */
  getArticles(source) {
    const apiKey = process.env.APIKEY;
    const requestUrl = `${baseUrl}articles?apiKey=${apiKey}&source=${source}`;
    axios(requestUrl).then((res) => {
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

export default NewsFeedAPI;
