import React from 'react';
import CryptoDetailPanel from '../../component/CryptoDetailPanel';
import './MainPage.sass';
import CryptoNewsPanel from '../../component/CryptoNewsPanel/CryptoNewsPanel';
import { getBitcoinNews } from '../../api/news.api';
import io from 'socket.io-client';
import GoogleLogin from 'react-google-login';
import CryptoLike from '../../component/CryptoLike';
import { connect } from 'react-redux';
import { loadCryptoPrice } from '../../actions/crypto';
import { loadGif } from '../../actions/gif';
import PropTypes from 'prop-types';

let socket = io(`${process.env.API_URL}/likes`);

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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

  loadBitcoinPrice() {
    this.props.dispatch(loadCryptoPrice())
      .then(({ percentChange }) => {
        this.props.dispatch(loadGif(percentChange));
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
        <CryptoDetailPanel {...this.props.cryptoPrice}/>
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
            { this.props.gif ? <img src={`${process.env.API_URL}/gifs/${this.props.gif}`}/> : null }
          </div>

          <br/>

          <CryptoLike isGifLiked={this.state.isGifLiked} likeCount={this.state.likeCount} toggleLike={this.toggleLike}/>
        </div>
        <br/>
        <CryptoNewsPanel news={this.state.news}/>
      </div>
    );
  }
}

MainPage.propTypes = {
  dispatch: PropTypes.func,
  cryptoPrice: PropTypes.object,
  gif: PropTypes.gif
};

function mapStateToProps(state) {
  return {
    selectedCrypto: state.crypto.selectedCrypto,
    cryptoPrice: state.crypto.cryptoPrice,
    gif: state.gif
  };
}

export default connect(mapStateToProps, )(MainPage);