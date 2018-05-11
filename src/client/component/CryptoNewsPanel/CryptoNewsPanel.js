import React from 'react';
import CryptoNews from './CryptoNews';
import PropTypes from 'prop-types';
import './CryptoNewsPanel.sass';

const CryptoNewsPanel = ({ news, selectedCrypto }) => {
  return (
    <div className="crypto-news-panel">
      <div className="crypto-news-panel-header">
        <h1>{selectedCrypto.name.toUpperCase()} NEWS</h1>
        <label>(Powered by News API)</label>
      </div>

      <br/>

      {news.map((article, i) => <CryptoNews key={i} article={article}/> )}
    </div>
  );
};

CryptoNewsPanel.propTypes = {
  news: PropTypes.array,
  selectedCrypto: PropTypes.object
};

export default CryptoNewsPanel;