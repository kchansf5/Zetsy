import React from 'react';
import {connect} from 'react-redux';
import {ProductItem} from '../products/product_item';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const query = this.props.searchResults[0];
    if (typeof query === "string") {
      return (
        <main>
          <div className="cant-find-box">

            <div>"{query}" not found!</div>

            <div className="cant-find"></div>
          </div>
        </main>
      );
    } else {

      return (
        <main>
          <div className="category-box">
            <div>
              {this.props.searchResults.map(product =>
                <ProductIndexItem product={product} key={product.id} />)}
            </div>
          </div>
        </main>
      );
    }
    }
}

export default SearchResults;
