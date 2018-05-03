import * as actionTypes from './actionTypes';

export function loadGif(percentChange) {
  return dispatch => {
    let gif = '';
    if (percentChange < -10){
      gif = 'crying.gif';
    } else if (-10 <= percentChange && percentChange < -3) {
      gif = 'can_we_panic.gif';
    } else if (-3 <= percentChange && percentChange < 3) {
      gif = 'its_ok.gif';
    } else if (percentChange >= 3) {
      gif = 'getting_excited.gif';
    }

    dispatch(loadGifSuccess(gif));
    return gif;
  };
}

export function loadGifSuccess(gif) {
  return {
    type: actionTypes.LOAD_GIF_SUCCESS,
    gif
  };
}