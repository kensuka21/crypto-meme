import React from 'react';
import formatNumber from '../../helpers/formatNumber';
import './CryptoLike.sass';
import PropTypes from 'prop-types';

const CryptoLike = ({ isGifLiked, toggleLike, likeCount }) => {
  return (
    <div className="crypto-like">
      <a href="javascript:void(0)" className={isGifLiked ? 'liked' : 'unliked'} onClick={toggleLike}><i className="fas fa-thumbs-up fa-2x" ></i></a>
      <label className={isGifLiked ? 'liked' : ''}>{formatNumber(likeCount)}</label>
      <div style={{ clear: 'both' }}></div>
      <div className="text-center">
        <span className="gif-like-text">Like this gif</span>
      </div>
    </div>
  );
};

CryptoLike.propTypes = {
  isGifLiked: PropTypes.bool,
  toggleLike: PropTypes.func,
  likeCount: PropTypes.number
};

export default CryptoLike;