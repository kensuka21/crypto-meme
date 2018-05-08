import React from 'react';
import PropTypes from 'prop-types';
import './CryptoDetailPanel.sass';
import CryptoDetailBox from './CryptoDetailBox';
import CryptoDropdown from '../CryptoDropdown';

const CryptoDetailPanel = ({ price, percentChange, priceChange, selectedCrypto, cryptos }) => {
  if (!price) {
    return null;
  }
  price = price.format(2);
  percentChange = percentChange.format(2);
  priceChange = priceChange.format(2);

  const trend = percentChange >= 0 ? 'bullish' : 'bearish';
  return (
    <div className="crypto-detail-panel">
      <CryptoDetailBox className="crypto-dropdown">
        <CryptoDropdown cryptos={cryptos} selectedCrypto={selectedCrypto}/>
      </CryptoDetailBox>

      <CryptoDetailBox>
        <CryptoDetailBox.CryptoDetailBoxTitle>{selectedCrypto.name} Price</CryptoDetailBox.CryptoDetailBoxTitle>
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
  price: PropTypes.number,
  priceChange: PropTypes.number,
  percentChange: PropTypes.number,
  cryptos: PropTypes.array,
  selectedCrypto: PropTypes.object
};

export default CryptoDetailPanel;