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

const CryptoDetailBoxContent = ({children}) => {
  return (
    <div className="crypto-detail-box-content">{children}</div>
  );
};

CryptoDetailBoxContent.propTypes = {
  children: PropTypes.any
};

CryptoDetailBox.CryptoDetailBoxTitle = CryptoDetailBoxTitle;
CryptoDetailBox.CryptoDetailBoxContent = CryptoDetailBoxContent;

export default CryptoDetailBox;
