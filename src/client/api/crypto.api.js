const API_URL = 'https://api.coinmarketcap.com';

export function getBitcoinPrice() {
  return fetch(`${API_URL}/v1/ticker/bitcoin/`)
    .then(response => {
      return response.json();
    });
}
