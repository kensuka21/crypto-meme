import * as actionTypes from '../actions/like/actionTypes';

const initialState = {
  isGifLiked: false,
  count: 0
};

export default function like(state = initialState, action) {
  switch (action.type) {
  case actionTypes.LOAD_IS_GIF_LIKED_SUCCESS:
    return Object.assign({}, state, { isGifLiked: true });
  case actionTypes.LOAD_IS_GIF_LIKED_FAIL:
    return Object.assign({}, state, { isGifLiked: false });
  case actionTypes.LOAD_LIKE_COUNT:
    return Object.assign({}, state, { count: action.count });
  default:
    return state;
  }
}
