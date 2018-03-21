import React from 'react';
import './CryptoDetailPanel.sass';
import CryptoDetailBox from './CryptoDetailBox';
import bitcoinLogo from '../../assets/bitcoin-logo.png';

const CryptoDetailPanel = () => {
  return (
    <div className="crypto-detail-panel">
      <CryptoDetailBox>
        <img className="crypto-logo" src={bitcoinLogo}/>
      </CryptoDetailBox>

      <CryptoDetailBox>
        <CryptoDetailBox.CryptoDetailBoxTitle>Bitcoin Price</CryptoDetailBox.CryptoDetailBoxTitle>
        <div>$8,829.22</div>
      </CryptoDetailBox>

      <CryptoDetailBox>
        <CryptoDetailBox.CryptoDetailBoxTitle>Percent Change</CryptoDetailBox.CryptoDetailBoxTitle>
        <div>10%</div>
      </CryptoDetailBox>

      <CryptoDetailBox>
        <CryptoDetailBox.CryptoDetailBoxTitle>Price Change</CryptoDetailBox.CryptoDetailBoxTitle>
        <div>$829.22</div>
      </CryptoDetailBox>
    </div>
  );
};

export default CryptoDetailPanel;