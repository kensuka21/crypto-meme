import React from 'react';
import CryptoNews from './CryptoNews';
import PropTypes from 'prop-types';
import './CryptoNewsPanel.sass';

const CryptoNewsPanel = ({news}) => {
  return (
    <div className="crypto-news-panel">
      <div className="crypto-news-panel-header">
        <h1>BITCOIN NEWS</h1>
        <label>(Powered by News API)</label>
      </div>

      <br/>

      {news.map((article, i) => <CryptoNews key={i} article={article}/> )}
    </div>
  );
};

CryptoNewsPanel.propTypes = {
  news: PropTypes.array
};

export default CryptoNewsPanel;