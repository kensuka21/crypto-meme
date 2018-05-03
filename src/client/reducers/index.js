import { combineReducers } from 'redux';
import crypto from './crypto';
import like from './like';
import news from './news';
import gif from './gif';

export default combineReducers({
  crypto,
  like,
  news,
  gif
});