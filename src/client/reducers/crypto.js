const initialState = {
  cryptos: [
    {
      name: 'BTC'
    },
    {
      name: 'ETH'
    }
  ],
  selectedCrypto: null
};

export default function crypto(state = initialState, action) {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
};
