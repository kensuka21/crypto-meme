import React from 'react';
import CryptoDetailPanel from '../../component/CryptoDetailPanel';
import './MainPage.sass';
import { getBitcoinPrice } from '../../api/crypto.api';
import CryptoNewsPanel from '../../component/CryptoNewsPanel/CryptoNewsPanel';
import { isGifLiked, likeCount } from '../../api/like.api';
import { getBitcoinNews } from '../../api/news.api';
import io from 'socket.io-client';
import formatNumber from '../../helpers/formatNumber';
import GoogleLogin from 'react-google-login';

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
      news: [],
      authUser: null
    };
  }

  toggleLike = () => {
    if (!this.state.authUser) {
      alert('You have to sign in with Google.');
      return;
    }
    const like = { email: this.state.authUser.email, gif: this.state.gif };
    if (this.state.isGifLiked) {
      socket.emit('removeLike', like);
    } else {
      socket.emit('newLike', like);
    }
  }

  loadLikes(gif) {
    likeCount(gif)
      .then(count => {
        const email = this.state.authUser ? this.state.authUser.email : 'undefined';

        isGifLiked(email, gif)
          .then((gifLiked) => {
            this.setState({ likeCount: count, isGifLiked: gifLiked });
          }, () => {
            this.setState({ likeCount: count });
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
    const authUser = localStorage.getItem('authUser');

    if (authUser) {
      this.setState({
        authUser: JSON.parse(authUser)
      });
    }

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

    setTimeout(() => {
    }, 1000);
  }

  responseGoogle(response) {
    if (!response.profileObj) return;

    const authUser = {
      email: response.profileObj.email,
      name: response.profileObj.name
    };

    localStorage.setItem('authUser', JSON.stringify(authUser));
    this.setState({
      authUser: authUser
    });
    this.loadLikes(this.state.gif);
  }

  render() {
    return (
      <div className="main-page">
        <CryptoDetailPanel {...this.state}/>
        <br/>
        <div className="gif-meme">
          <div className="google-signin">
            { !this.state.authUser ?
              <GoogleLogin
                id="googleBtn"
                ref={(ref) => this.googleBtn = ref}
                clientId="329817704445-rl1r1738d0n99f73nf32nka6trlh5og2"
                onSuccess={this.responseGoogle.bind(this)}>
                <i className="fab fa-google"></i> <span>Login with Google</span>
              </GoogleLogin> :
              <div>Welcome, {this.state.authUser.name}</div>
            }

          </div>
          <div className="gif-img">
            { this.state.gif ? <img src={`${process.env.API_URL}/gifs/${this.state.gif}`}/> : null }
          </div>
          <br/>
          <div className="gif-like">
            <a href="javascript:void(0)" className={this.state.isGifLiked ? 'liked' : 'unliked'} onClick={this.toggleLike}><i className="fas fa-thumbs-up fa-2x" ></i></a>
            <label className={this.state.isGifLiked ? 'liked' : ''}>{formatNumber(this.state.likeCount)}</label>
            <div style={{ clear: 'both' }}></div>
            <div className="text-center">
              <span className="gif-like-text">Like this gif</span>
            </div>
          </div>
        </div>
        <br/>
        <CryptoNewsPanel news={this.state.news}/>
      </div>
    );
  }
}

export default MainPage;