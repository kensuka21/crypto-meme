import React from 'react';
import CryptoDetailPanel from '../../component/CryptoDetailPanel';
import gif from '../../assets/can_we_panic.gif';
import './MainPage.sass';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <CryptoDetailPanel/>

        <img className="gif-meme" src={gif}/>

      </div>
    );
  }
}

export default MainPage;