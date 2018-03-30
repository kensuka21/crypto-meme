const API_URL = 'https://newsapi.org';
const API_KEY = 'fa628791e4fb4360a837d450f24803cb';

export function getBitcoinNews() {
  return fetch(`${API_URL}//v2/top-headlines?apiKey=${API_KEY}&language=en&q=bitcoin`)
    .then(response => {
      return response.json();
    });
};
