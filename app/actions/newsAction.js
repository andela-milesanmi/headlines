import dispatcher from '../dispatcher/dispatcher';

export function getNews(obj) {
  dispatcher.dispatch({
    type: 'GET_NEWS',
    obj,
  });
}

export function sortNews(sortby) {
  dispatcher.dispatch({
    type: 'SORT_NEWS',
    sortby,
  });
}
