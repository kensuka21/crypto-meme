import React from 'react';
import CryptoDetailPanel from '../../component/CryptoDetailPanel';
import canWePanicGif from '../../assets/can_we_panic.gif';
import itsOkGif from '../../assets/its_ok.gif';
import gettingExcitedGif from '../../assets/getting_excited.gif';
import cryingGif from '../../assets/crying.gif';
import './MainPage.sass';
import { getBitcoinPrice } from '../../api/crypto.api';
import CryptoNewsPanel from '../../component/CryptoNewsPanel/CryptoNewsPanel';
import { getBitcoinNews } from '../../api/news.api';

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      price: '',
      percentChange: '',
      priceChange: '',
      gif: '',
      news: []
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

        if (percentChange < -10){
          gif = cryingGif;
        } else if (-10 <= percentChange && percentChange < -3) {
          gif = canWePanicGif;
        } else if (-3 <= percentChange && percentChange < 3) {
          gif = itsOkGif;
        } else if (percentChange >= 3) {
          gif = gettingExcitedGif;
        }

        this.setState({
          price: price.format(2),
          percentChange: percentChange.format(2),
          priceChange: priceChange.format(2),
          gif: gif
        });
      });

    getBitcoinNews()
      .then(data => {
        this.setState({
          news: data.articles
        });
      });
  }

  render() {
    return (
      <div className="main-page">
        <CryptoDetailPanel {...this.state}/>

        <div className="gif-meme">
          { this.state.gif ? <img src={this.state.gif}/> : null }
        </div>

        <br/>

        <CryptoNewsPanel news={this.state.news}/>
      </div>
    );
  }
}

export default MainPage;