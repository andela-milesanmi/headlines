import { EventEmitter } from 'events';
import axios from 'axios';

import dispatcher from '../dispatcher/dispatcher';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.newsObj = {
      source: 'the-next-web',
      sortby: 'latest',
    };
    this.articles = [];
  }

  getArticles(obj) {
    const requestUrl = `https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&source=${obj.source}`;
    axios.get(requestUrl).then((res) => {
      if (res.data.message) {
        throw new Error(res.data.message);
      } else {
        this.articles = res.data.articles;
        
        // REMOVE THE CONSOLE.LOG SOONEST
        console.log('got the data!', this.articles);
        this.emit('change');
        return this.articles;
      }
    }, (res) => {
      console.log(res.data.message);
      throw new Error(res.data.message);
    });
  }

  // getArticles() {
  //   console.log(`Get Articles: ${this}`);
  //   return this.articles;
  // }

  handleActions(action) {
    switch (action.type) {
      case 'GET_NEWS':
        this.getArticles(action.obj);
        break;
      default:
        break;
    }
  }
}

const newsStore = new NewsStore();
dispatcher.register(newsStore.handleActions.bind(newsStore));

export default NewsStore;
