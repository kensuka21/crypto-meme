import * as actionTypes from '../actions/crypto/actionTypes';

const bitcoin = {
  code: 'BTC',
  name: 'Bitcoin',
  image: require('../assets/bitcoin-logo.png')
};

const ethereum = {
  code: 'ETH',
  name: 'Ethereum',
  image: require('../assets/ethereum-logo.png')
};

const xrp = {
  code: 'XRP',
  name: 'Ripple',
  image: require('../assets/xrp-logo.png')
};

const initialState = {
  list: [bitcoin, ethereum, xrp],
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
    return Object.assign({}, state, { cryptoPrice: action.cryptoPrice });
  case actionTypes.CHANGE_CRYPTO_SUCCESS:
    return Object.assign({}, state, { selectedCrypto: action.crypto });
  default:
    return state;
  }
}
