import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {

  render() {
    return (
      <div className="banner">

        <Link to="/products">
          <div className="slideshow">
              <div className="slide1">
                <div className="slide-text">
                  <h2 className="top">ACCESSORIES</h2>
                  <h2 className="middle">Don't leave on your adventure without these items.</h2>
                  <div className="bottom">
                    <h2>Shop now</h2>
                    <div className="arrow-box">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <img className="slide1-img" src="https://images6.alphacoders.com/516/thumb-1920-516665.jpg" />
              </div>
          </div>
        </Link>

        <div className="right-side">

          <Link to="/products">
            <div className="top-right">
              <h2>One-of-a-kind picks from every corner of Hyrule</h2>
              <h2 className="explore-now">Explore now</h2>
              <div className="arrow-box">
                <i class="fas fa-chevron-right"></i>
              </div>
                <img className="top-right-img" src="https://www.zeldadungeon.net/wp-content/uploads/2017/03/Oman-Au-Shrine.jpg" />
            </div>
          </Link>

          <Link to="/products">
            <div className="bottom-right">
              <h2>Fantastic finds that ship for free</h2>
              <div className="arrow-box">
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </Link>

        </div>
      </div>
    );
  }

}

export default Banner;
