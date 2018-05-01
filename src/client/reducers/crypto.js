import * as actionTypes from '../actions/crypto/actionTypes';

const bitcoin = {
  code: 'BTC',
  name: 'Bitcoin'
};

const ethereum = {
  code: 'ETH',
  name: 'Ethereum'
};

const initialState = {
  list: [bitcoin, ethereum],
  selectedCrypto: bitcoin,
  cryptoPrice: {
    price: 0.00,
    percentChange: 0.00,
    priceChange: 0.00
  }
};

export default function crypto(state = initialState, action) {
  switch (action.type) {
  case actionTypes.LOAD_CRYPTO_PRICE_SUCCESS:
    return Object.assign({}, state, { cryptoPrice: action.cryptoPrice});
  default:
    return state;
  }
}
