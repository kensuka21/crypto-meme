import React from 'react';
import './CryptoNews.sass';
import PropTypes from 'prop-types';
import moment from 'moment';

const CryptoNews = ({article}) => {
  return  (
    <div className="crypto-news">
      <div className="crypto-news-image">
        <img src={article.urlToImage}/>
      </div>
      <div className="crypto-news-body">
        <a href={article.url} target="_blank"><h3 className="crypto-news-title">{article.title}</h3></a>
        <label className="crypto-news-date">{moment(article.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</label>

        <p className="crypto-news-description">
          {article.description}
        </p>
      </div>
    </div>
  );
};

CryptoNews.propTypes = {
  article: PropTypes.array
};

export default CryptoNews;