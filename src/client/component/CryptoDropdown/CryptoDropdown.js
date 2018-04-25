import React from 'react';
import PropTypes from 'prop-types';
import bitcoinLogo from '../../assets/bitcoin-logo.png';
import ethereumLogo from '../../assets/ethereum-logo.png';
import './CryptoDropdown.sass';

const CryptoDropdown = ({ cryptos }) => {
  return (
    <div className="crypto-dropdown">
      <div className="dropdown-btn" href="">
        <img className="crypto-logo" src={bitcoinLogo} />
        <i className="fas fa-caret-down"></i>
      </div>
      <div className="dropdown-content">
        {cryptos.map((crypto, i) => (
          <a key={i} href="#">
            <img className="crypto-logo" src={ethereumLogo} />
          </a>))}
      </div>
    </div>
  );
};

CryptoDropdown.propTypes = {
  cryptos: PropTypes.array
};

export default CryptoDropdown;
