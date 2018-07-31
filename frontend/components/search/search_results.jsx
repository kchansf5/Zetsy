import React from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {ProductItem} from '../products/product_item';
import NumberFormat from 'react-number-format';


class SearchResults extends React.Component {
  constructor(props) {
    super(props);

  }


  render () {
    const query = this.props.searchItems[0];
    if (typeof query === "string") {
      return (
        <main>
          <div className="cant-find-box">

            {/* <div>"{query}" not found!</div> */}
            <div>TEST</div>

            <div className="cant-find"></div>
          </div>
        </main>
      );
    } else {
      return (
        <div className="product-listings">
          {this.props.searchItems.map(product => {
            return(
              <Link key={product.id} to={`/products/${product.id}`}>
                <div className="product">
                  <img src={product.image_url}/>
                  <div className="product-name">
                    {product.product_name}
                  </div>
                  <div className="product-price">
                    <NumberFormat value={product.price + '.00'}
                      displayType={'text'} thousandSeparator={true} prefix={'$'}/>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      );
    }
  }
}


const mapStateToProps = state => {
  return {
    searchItems: Object.values(state.products)
  };
};


export default withRouter(connect(mapStateToProps, null)(SearchResults));
