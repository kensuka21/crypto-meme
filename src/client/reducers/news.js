import * as actionTypes from '../actions/news/actionTypes';

const initialState = [];

export default function news(state = initialState, action) {
  switch (action.type) {
  case actionTypes.LOAD_CRYPTO_NEWS:
    return state;
  default:
    return state;
  }
}
