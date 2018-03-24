import React from 'react';
import PropTypes from 'prop-types';
import './CryptoDetailPanel.sass';
import CryptoDetailBox from './CryptoDetailBox';
import bitcoinLogo from '../../assets/bitcoin-logo.png';

const CryptoDetailPanel = ({price, percentChange, priceChange}) => {
  const trend = percentChange >= 0 ? 'bullish' : 'bearish';

  return (
    <div className="crypto-detail-panel">
      <CryptoDetailBox>
        <img className="crypto-logo" src={bitcoinLogo}/>
      </CryptoDetailBox>

      <CryptoDetailBox>
        <CryptoDetailBox.CryptoDetailBoxTitle>Bitcoin Price</CryptoDetailBox.CryptoDetailBoxTitle>
        <CryptoDetailBox.CryptoDetailBoxContent>{price}</CryptoDetailBox.CryptoDetailBoxContent>
      </CryptoDetailBox>

      <CryptoDetailBox>
        <CryptoDetailBox.CryptoDetailBoxTitle>Percent Change</CryptoDetailBox.CryptoDetailBoxTitle>
        <CryptoDetailBox.CryptoDetailBoxContent trend={trend}>{percentChange}%</CryptoDetailBox.CryptoDetailBoxContent>
      </CryptoDetailBox>

      <CryptoDetailBox>
        <CryptoDetailBox.CryptoDetailBoxTitle>Price Change</CryptoDetailBox.CryptoDetailBoxTitle>
        <CryptoDetailBox.CryptoDetailBoxContent trend={trend}>{priceChange}</CryptoDetailBox.CryptoDetailBoxContent>
      </CryptoDetailBox>
    </div>
  );
};

CryptoDetailPanel.propTypes = {
  price: PropTypes.string,
  priceChange: PropTypes.string,
  percentChange: PropTypes.string
};

export default CryptoDetailPanel;