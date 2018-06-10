import React from 'react';

class Banner extends React.Component {

  render() {
    return (
      <div className="banner">

        <div className="slideshow">
          <img className="slide1" src="https://images6.alphacoders.com/516/thumb-1920-516665.jpg" />
        </div>

        <div className="top-right">
          <img className="top-right-img" src="https://img00.deviantart.net/8670/i/2016/254/2/2/rusted_master_sword__hi_res__by_hextupleyoodot-dahc8no.png" />
        </div>

        <div className="bottom-right">
          Fantastic finds that ship for free
        </div>

      </div>
    );
  }

}

export default Banner;
