import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './CryptoDetailBox.sass';

const CryptoDetailBox = ({children, className}) => {
  return (
    <div className={classNames('crypto-detail-box', className)}>
      <div className="crypto-detail-body">
        {children}
      </div>
    </div>
  );
};

CryptoDetailBox.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

const CryptoDetailBoxTitle = ({children}) => {
  return (
    <div className="crypto-detail-box-title">{children}</div>
  );
};

CryptoDetailBoxTitle.propTypes = {
  children: PropTypes.any
};

const CryptoDetailBoxContent = ({children, trend}) => {
  const classes = classNames(
    'crypto-detail-box-content',
    {
      'red-text': trend === 'bearish',
      'green-text': trend === 'bullish'
    }
  );
  return (
    <div className={classes}>{children}</div>
  );
};

CryptoDetailBoxContent.propTypes = {
  children: PropTypes.any,
  trend: PropTypes.string
};

CryptoDetailBox.CryptoDetailBoxTitle = CryptoDetailBoxTitle;
CryptoDetailBox.CryptoDetailBoxContent = CryptoDetailBoxContent;

export default CryptoDetailBox;
