import * as actionTypes from './actionTypes';

const API_URL = process.env.API_URL;

export function loadIsGifLiked(email, gif) {
  return dispatch => {
    return fetch(`${API_URL}/api/v1/likes/${email}/gif/${gif}`)
      .then((response) => {
        return response.json()
          .then(data => {
            if (data) {
              dispatch(loadIsGifLikedSuccess());
              return Promise.resolve(true);
            } else {
              dispatch(loadIsGifLikedFail());
              return Promise.resolve(false);
            }
          });
      })
      .catch(() => {
        dispatch(loadIsGifLikedFail());
        return Promise.resolve(false);
      });
  };
}

export function loadIsGifLikedSuccess() {
  return {
    type: actionTypes.LOAD_IS_GIF_LIKED_SUCCESS
  };
}

export function loadIsGifLikedFail() {
  return {
    type: actionTypes.LOAD_IS_GIF_LIKED_FAIL
  };
}

export function loadLikesCount(gif) {
  return dispatch => {
    return fetch(`${API_URL}/api/v1/likes/gif/${gif}/count`)
      .then(response => {
        return response.json()
          .then(count => {
            dispatch(loadLikesCountSuccess(count));
            return count;
          });
      });
  };
}

export function loadLikesCountSuccess(count) {
  return {
    type: actionTypes.LOAD_LIKE_COUNT_SUCCESS,
    count
  };
}