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
        <CryptoDetailBox.CryptoDetailBoxContent>$8,829.22</CryptoDetailBox.CryptoDetailBoxContent>
      </CryptoDetailBox>

      <CryptoDetailBox>
        <CryptoDetailBox.CryptoDetailBoxTitle>Percent Change</CryptoDetailBox.CryptoDetailBoxTitle>
        <CryptoDetailBox.CryptoDetailBoxContent trend="bearish">10%</CryptoDetailBox.CryptoDetailBoxContent>
      </CryptoDetailBox>

      <CryptoDetailBox>
        <CryptoDetailBox.CryptoDetailBoxTitle>Price Change</CryptoDetailBox.CryptoDetailBoxTitle>
        <CryptoDetailBox.CryptoDetailBoxContent>$829.22</CryptoDetailBox.CryptoDetailBoxContent>
      </CryptoDetailBox>
    </div>
  );
};

export default CryptoDetailPanel;