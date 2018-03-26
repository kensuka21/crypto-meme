import React from 'react';
import CryptoDetailPanel from '../../component/CryptoDetailPanel';
import canWePanicGif from '../../assets/can_we_panic.gif';
import itsOkGif from '../../assets/its_ok.gif';
import './MainPage.sass';
import { getBitcoinPrice } from '../../api/crypto.api';

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
        bitconPrice = bitconPrice[0];

        let gif = '';
        const price = Number(bitconPrice.price_usd);
        const percentChange = Number(bitconPrice.percent_change_24h);
        const priceChange = price - (price / ((percentChange / 100) + 1)) ;
        
        if (-10 <= percentChange && percentChange < -3){
          gif = canWePanicGif;
        } else if (-3 <= percentChange && percentChange < 3) {
          gif = itsOkGif;
        }
        this.setState({
          price: price.format(2),
          percentChange: percentChange.format(2),
          priceChange: priceChange.format(2),
          gif: gif
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