import * as actionTypes from './actionTypes';

export function loadAuthUser(authUser) {
  return dispatch => {
    dispatch({
      type: actionTypes.LOAD_AUTH_USER_SUCCESS,
      authUser
    });

    return authUser;
  };
}
