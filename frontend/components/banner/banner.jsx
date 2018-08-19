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
                <div className="slide1-img"></div>
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
                <div className="top-right-img"></div>
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

        <div className="inspiration">Inspiration updated daily</div>

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

      <div className="etsy-safe">

        <div className="safe-image"></div>

        <div className="safe-center">
          <div className="safe-header">Etsy keeps you safe</div>
          <div className="safe-subs">
            <div className="trustworthy">
              Trustworthy sellers
              <div className="trustworthy-sub">
                You can read their reviews and policies, and contact them with any questions
              </div>
            </div>
            <div className="world">
              World-class security
              <div className="world-sub">
                Safeguarding your information is the top priority of our dedicated security experts
              </div>
            </div>

            <div className="purchase">
              Purchase protection
              <div className="purchase-sub">
                If anything goes wrong, our global support team has got your back
              </div>
            </div>
          </div>
        </div>

        <div className="keys-image" src=""></div>

      </div>

    </div>
    );
  }

}

export default Banner;
