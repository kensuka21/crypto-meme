import React from 'react';
import CryptoDetailPanel from '../../component/CryptoDetailPanel';
import gif from '../../assets/can_we_panic.gif';
import './MainPage.sass';
import { getBitcoinPrice, getYesterdayBitcoinPrice } from '../../api/crypto.api';

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      price: '',
      percentChange: '',
      priceChange: ''
    };
  }

  componentDidMount() {
    getBitcoinPrice()
      .then(bitconPrice => {
        
        getYesterdayBitcoinPrice()
          .then(yesterdayPrice => {
            this.setState({
              price: (bitconPrice).format(2),
              percentChange: (((bitconPrice / yesterdayPrice) - 1) * 100).format(2),
              priceChange: (bitconPrice - yesterdayPrice).format(2)
            });
          });
      });
  }

  render() {
    return (
      <div className="main-page">
        <CryptoDetailPanel {...this.state}/>

        <img className="gif-meme" src={gif}/>

      </div>
    );
  }
}

export default MainPage;