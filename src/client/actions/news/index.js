import * as actionTypes from './actionTypes';

const API_URL = 'https://newsapi.org';
const API_KEY = 'fa628791e4fb4360a837d450f24803cb';

export function loadCryptoNews(crypto) {
  return dispatch => {
    return fetch(`${API_URL}//v2/top-headlines?apiKey=${API_KEY}&language=en&q=${crypto}`)
      .then(response => {
        return response.json()
          .then(data => {
            dispatch(loadCryptoNewsSuccess(data.articles));
          });
      });
  };
}

export function loadCryptoNewsSuccess(news) {
  return {
    type: actionTypes.LOAD_CRYPTO_NEWS,
    news
  };
}
