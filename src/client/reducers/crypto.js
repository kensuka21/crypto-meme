import * as actionTypes from '../actions/crypto/actionTypes';

const initialState = {
  list: [
    {
      code: 'BTC',
      name: 'Bitcoin'
    },
    {
      code: 'ETH',
      name: 'Ethereum'
    }
  ],
  selectedCrypto: this.list[0],
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
