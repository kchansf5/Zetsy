import React from 'react';

class Banner extends React.Component {

  render() {
    return (
      <div className="banner">

        <div className="slideshow">
          <div className="slide1">
            <div className="slide-text">
              <h2 className="top">ACCESSORIES</h2>
              <h2 className="middle">Don't leave on your adventure without these items</h2>
              <h2 className="bottom">Shop now</h2>
            </div>
            <img className="slide1-img" src="https://images6.alphacoders.com/516/thumb-1920-516665.jpg" />
          </div>
        </div>

        <div className="top-right">
          <img className="top-right-img" src="https://www.zeldadungeon.net/wp-content/uploads/2017/03/Oman-Au-Shrine.jpg" />
        </div>

        <div className="bottom-right">
          Fantastic finds that ship for free
        </div>

      </div>
    );
  }

}

export default Banner;
