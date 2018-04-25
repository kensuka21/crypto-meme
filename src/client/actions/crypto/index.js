import * as actionTypes from './actionTypes';

const API_URL = 'https://api.coinmarketcap.com';

export function loadCryptoPrice() {
  return (dispatch, getState) => {
    return fetch(`${API_URL}/v1/ticker/${getState().crypto.selectedCrypto.name.toLowerCase()}/`)
      .then(response => {
        return response.json()
          .then(cryptoPrice => {
            const price = Number(cryptoPrice.price_usd);
            const percentChange = Number(cryptoPrice.percent_change_24h);
            const priceChange = price - (price / ((percentChange / 100) + 1)) ;

            dispatch(loadCryptoPrice({price, percentChange, priceChange}));
          });
      });
  };
}

export function loadCryptoPriceSuccess(cryptoPrice) {
  return {
    type: actionTypes.LOAD_CRYPTO_PRICE_SUCCESS,
    cryptoPrice
  };
}
