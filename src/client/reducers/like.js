import * as actionTypes from '../actions/like/actionTypes';

const initialState = {
  isGifLiked: false,
  count: 0
};

export default function like(state = initialState, action) {
  switch (action.type) {
  case actionTypes.LOAD_IS_GIF_LIKED:
    return state;
  case actionTypes.LOAD_LIKE_COUNT:
    return state;
  default:
    return state;
  }
}
