import moment from 'moment';
const API_URL = 'https://api.coindesk.com/v1/bpi';

export function getBitcoinPrice() {
  return fetch(`${API_URL}/currentprice.json`)
    .then(response => {
      return response.json().then(data => {
        return data.bpi.USD.rate_float;
      });
    });
}

// https://api.coindesk.com/v1/bpi/?start=2018-03-18&end=2018-03-19
export function getYesterdayBitcoinPrice() {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  return fetch(`${API_URL}/historical/close.json?start=${moment(yesterday.toString()).format('YYYY-MM-DD')}&end=${moment(today.toString()).format('YYYY-MM-DD')}`)
    .then(response => {
      return response.json().then(data => {
        const keys = Object.keys(data.bpi);
        return data.bpi[keys[keys.length - 1]];
      });
    });
}