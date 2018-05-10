import * as actionTypes from './actionTypes';

const API_URL = 'https://api.coinmarketcap.com';

export function loadCryptoPrice() {
  return (dispatch, getState) => {
    return fetch(`${API_URL}/v1/ticker/${getState().crypto.selectedCrypto.name.toLowerCase()}/`)
      .then(response => {
        return response.json()
          .then(cryptoPrice => {
            cryptoPrice = cryptoPrice[0];
            const price = Number(cryptoPrice.price_usd);
            const percentChange = Number(cryptoPrice.percent_change_24h);
            const priceChange = price - (price / ((percentChange / 100) + 1)) ;

            dispatch(loadCryptoPriceSuccess({ price, percentChange, priceChange }));
            return { price, percentChange, priceChange };
          });
      });
  };
}

export function changeCrypto(crypto) {
  return dispatch => {
    dispatch(changeCryptoSuccess(crypto));
  };
}

export function changeCryptoSuccess(crypto) {
  return {
    type: actionTypes.CHANGE_CRYPTO_SUCCESS,
    crypto
  };
}

export function loadCryptoPriceSuccess(cryptoPrice) {
  return {
    type: actionTypes.LOAD_CRYPTO_PRICE_SUCCESS,
    cryptoPrice
  };
}
