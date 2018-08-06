import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {

  render() {
    return (
      <div className="homepage">
      <div className="banner">

        <Link to="/products/categories/accessories">
          <div className="slideshow">
              <div className="slide1">
                <div className="slide-text">
                  <h2 className="top">ACCESSORIES</h2>
                  <h2 className="middle">Don't leave on your adventure without these items.</h2>
                  <div className="bottom">
                    <h2>Shop now</h2>
                    <div className="arrow-box">
                      <i className="fas fa-chevron-right"></i>
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
        <div className="inspiration">Inspiration updated daily</div>
        <div className="inspiration-sub">Make your day a little more interesting</div>

        <div className="all-tiles">
          <div className="left-tiles">
            <div className="small-tiles">
              <a href="#/products/45">
                <div id="small" className="small-tile-1"></div>
              </a>
              <a href="#/products/77">
                <div id="small" className="small-tile-2"></div>
              </a>
            </div>
          <div className="large-tiles">
            <a href="#/products/44">
              <div id="large" className="large-tile-1"></div>
            </a>
          </div>
        </div>

        <div className="right-tiles">
          <div className="large-tiles">
            <a href="#/products/54">
              <div id="large" className="large-tile-2"></div>
            </a>
          </div>
          <div className="small-tiles">
            <a href="#/products/28">
              <div id="small" className="small-tile-3"></div>
            </a>
            <a href="#/products/3">
              <div id="small" className="small-tile-4"></div>
            </a>
          </div>
        </div>
      </div>

      <div className="checks">
        <div className="check-1">
          <i class="fas fa-check"></i>
          Unique everything
          <br></br>
          <br></br>
          We have millions of one-of-a-kind items, so you can find whatever you need (or really, really want).
        </div>
        <div className="check-2">
          <i class="fas fa-check"></i>
          Independent sellers
          <br></br>
          <br></br>
          Buy directly from someone who put their heart and soul into making something special.
        </div>
        <div className="check-3">
          <i class="fas fa-check"></i>
          Secure shopping
          <br></br>
          <br></br>
          We use best-in-class technology to protect your transactions.
        </div>
      </div>

    </div>
    );
  }

}

export default Banner;
