import React from 'react';
import PropTypes from 'prop-types';
import './CryptoDropdown.sass';

const CryptoDropdown = ({ cryptos, selectedCrypto }) => {
  return (
    <div className="crypto-dropdown">
      <div className="dropdown-btn" href="">
        <img className="crypto-logo" src={selectedCrypto.image} />
        <i className="fas fa-caret-down"></i>
      </div>
      <div className="dropdown-content">
        {cryptos.map((crypto, i) => (
          <a key={i} href="#">
            <img className="crypto-logo" src={crypto.image} />
          </a>))}
      </div>
    </div>
  );
};

CryptoDropdown.propTypes = {
  cryptos: PropTypes.array,
  selectedCrypto: PropTypes.object
};

export default CryptoDropdown;
