// import axios from 'axios';
const axios = require('axios');

// const BASE_NEWSFEED_URL = 'https://newsapi.org/v1/';

// API_KEY = c4e735ea8bd7e7b6dc8368c752517b2d
// SAMPLE = https://newsapi.org/v1/sources?language=en
// ARTICLES articles?source=bbc-news&apiKey=213327409d384371851777e7c7f78dfe
// SOURCES sources?language=en


const requestUrl = 'https://newsapi.org/v1/sources?language=en';
const getSources = () => {
  axios.get(requestUrl).then((res) => {
    if (res.message) {
      throw new Error(res.message);
    } else {
      return res.sources.length;
    }
  }, (res) => {
    throw new Error(res.message);
  });
};

getSources().then(()=>{
  console.log(res)
}
);
