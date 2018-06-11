import React from 'react';

class Banner extends React.Component {

  render() {
    return (
      <div className="banner">

        <div className="slideshow">
          <img className="slide1" src="https://images6.alphacoders.com/516/thumb-1920-516665.jpg" />
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
