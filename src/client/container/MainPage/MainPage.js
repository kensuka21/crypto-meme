import React from 'react';
import CryptoDetailPanel from '../../component/CryptoDetailPanel';
import './MainPage.sass';
import { getBitcoinPrice } from '../../api/crypto.api';
import CryptoNewsPanel from '../../component/CryptoNewsPanel/CryptoNewsPanel';
import { isGifLiked, likeCount } from '../../api/like.api';
import { getBitcoinNews } from '../../api/news.api';
import io from 'socket.io-client';
let socket = io(`${process.env.API_URL}/likes`);

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

  toggleLike = () => {

    if (this.state.isGifLiked) {
      socket.emit('removeLike', this.state.gif);
    } else {
      socket.emit('newLike', this.state.gif);
    }
  }

  loadLikes(gif) {
    isGifLiked(gif)
      .then((gifLiked) => {
        likeCount(gif)
          .then(count => {
            this.setState({ likeCount: count, isGifLiked: gifLiked });
          });
      })
      .catch(() => {});
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

        this.loadLikes(gif);

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
      this.loadLikes(this.state.gif);
    });

    socket.on('reduceLike', () => {
      this.loadLikes(this.state.gif);
    });

    this.loadBitcoinPrice();
    this.loadBitcoinNews();
  }

  render() {
    return (
      <div className="main-page">
        <CryptoDetailPanel {...this.state}/>

        <div className="gif-meme">
          <div className="gif-img">
            { this.state.gif ? <img src={`${process.env.API_URL}/gifs/${this.state.gif}`}/> : null }
          </div>
          <br/>
          <br/>
          <div>
            <a href="javascript:void(0)" onClick={this.toggleLike}><i className="fas fa-thumbs-up fa-2x" ></i></a>
            <label>{this.state.likeCount}</label>
            <div>Like this gif</div>
          </div>
        </div>
        <br/>
        <CryptoNewsPanel news={this.state.news}/>
      </div>
    );
  }
}

export default MainPage;