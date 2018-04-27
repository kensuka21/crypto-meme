import * as actionTypes from '../actions/gif/actionTypes';
const initialState = '';

export default function gif(state = initialState, action) {
  switch (action.type) {
  case actionTypes.LOAD_GIF_SUCCESS:
    return state;

  default:
    return state;
  }
}