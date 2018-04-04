import React from 'react';
import CryptoDetailPanel from '../../component/CryptoDetailPanel';
import './MainPage.sass';
import { getBitcoinPrice } from '../../api/crypto.api';
import CryptoNewsPanel from '../../component/CryptoNewsPanel/CryptoNewsPanel';
import { isGifLiked, likeCount } from '../../api/like.api';
import { getBitcoinNews } from '../../api/news.api';
import io from 'socket.io-client';
let socket = io('http://localhost:3000/likes');

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      price: '',
      percentChange: '',
      priceChange: '',
      gif: '',
      likeCount: 0,
      isGifLiked: false,
      news: []
    };
  }

  newLike = () => {
    socket.emit('newLike', this.state.gif);
  }

  loadLikeCount() {
    likeCount()
      .then(count => {
        this.setState({ likeCount: count });
      });
  }

  loadBitcoinPrice() {
    getBitcoinPrice()
      .then(bitconPrice => {
        bitconPrice = bitconPrice[0];

        let gif = '';
        const price = Number(bitconPrice.price_usd);
        const percentChange = Number(bitconPrice.percent_change_24h);
        const priceChange = price - (price / ((percentChange / 100) + 1)) ;

        if (percentChange < -10){
          gif = 'crying.gif';
        } else if (-10 <= percentChange && percentChange < -3) {
          gif = 'can_we_panic.gif';
        } else if (-3 <= percentChange && percentChange < 3) {
          gif = 'its_ok.gif';
        } else if (percentChange >= 3) {
          gif = 'getting_excited.gif';
        }

        isGifLiked(gif)
          .then(() => {
            this.setState({ isGifLiked: true });
          })
          .catch(() => {});

        this.setState({
          price: price.format(2),
          percentChange: percentChange.format(2),
          priceChange: priceChange.format(2),
          gif: gif
        });
      });
  }

  loadBitcoinNews() {
    getBitcoinNews()
      .then(data => {
        this.setState({
          news: data.articles
        });
      });
  }

  componentDidMount() {
    socket.on('connect', () => {

    });

    socket.on('addLike', () => {
      this.setState(prevState => {
        console.log(prevState.likeCount);
        
        return { likeCount:  prevState.likeCount + 1 };
      });
    });

    this.loadBitcoinPrice();
    this.loadBitcoinNews();
    this.loadLikeCount();
  }

  render() {
    return (
      <div className="main-page">
        <CryptoDetailPanel {...this.state}/>

        <div className="gif-meme">
          { this.state.gif ? <img src={`http://localhost:3000/gifs/${this.state.gif}`}/> : null }
          <br/>
          <br/>
          <label>{this.state.likeCount}</label>
          <a href="javascript:void(0)" onClick={this.newLike}><i className="fas fa-heart fa-2x" ></i></a>
        </div>
        <br/>
        <CryptoNewsPanel news={this.state.news}/>
      </div>
    );
  }
}

export default MainPage;