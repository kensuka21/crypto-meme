import * as actionTypes from '../actions/auth/actionTypes';

const initialState = null;

export default function auth(state = initialState, action) {
  switch (action.type) {
  case actionTypes.LOAD_AUTH_USER_SUCCESS:
    return action.authUser;
  default:
    return state;
  }
}