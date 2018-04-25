import { combineReducers } from 'redux';
import crypto from './crypto';
import like from './like';
import news from './news';

export default combineReducers({
  crypto,
  like,
  news
});