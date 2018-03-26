import React from 'react';
import CryptoDetailPanel from '../../component/CryptoDetailPanel';
import canWePanicGif from '../../assets/can_we_panic.gif';
import itsOkGif from '../../assets/its_ok.gif';
import './MainPage.sass';
import { getBitcoinPrice, getYesterdayBitcoinPrice } from '../../api/crypto.api';

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      price: '',
      percentChange: '',
      priceChange: '',
      gif: ''
    };
  }

  componentDidMount() {
    getBitcoinPrice()
      .then(bitconPrice => {
        getYesterdayBitcoinPrice()
          .then(yesterdayPrice => {
            let gif = '';
            let percentChange = (((bitconPrice / yesterdayPrice) - 1) * 100).format(2);

            if (-10 <= percentChange && percentChange < -3){
              gif = canWePanicGif;
            } else if (-3 <= percentChange && percentChange < 3) {
              gif = itsOkGif;
            }
            this.setState({
              price: (bitconPrice).format(2),
              percentChange: percentChange,
              priceChange: (bitconPrice - yesterdayPrice).format(2),
              gif: gif
            });
          });
      });
  }

  render() {
    return (
      <div className="main-page">
        <CryptoDetailPanel {...this.state}/>

        { this.state.gif ? <img className="gif-meme" src={this.state.gif}/> : null }
      </div>
    );
  }
}

export default MainPage;