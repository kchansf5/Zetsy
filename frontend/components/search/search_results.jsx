import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {ProductItem} from '../products/product_item';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

  }


  render () {
    return (
      <div>
        {this.props.searchItems.map(product => {
          return (
            <div>
              {product.product_name}
            </div>
          );
        })}
      </div>
    );
  }
  //
  // render() {
  //   const query = this.props.searchItems[0];
  //   if (typeof query === "string") {
  //     return (
  //       <main>
  //         <div className="cant-find-box">
  //
  //           <div>"{query}" not found!</div>
  //
  //           <div className="cant-find"></div>
  //         </div>
  //       </main>
  //     );
  //   } else {
  //
  //     return (
  //       <main>
  //         <div className="category-box">
  //           <div>
  //             {this.props.searchItems.map(product =>
  //               <ProductItem product={product} key={product.id} />)}
  //           </div>
  //         </div>
  //       </main>
  //     );
  //   }
  //   }
}


const mapStateToProps = state => {
  return {
    searchItems: Object.values(state.products)
  };
};


export default withRouter(connect(mapStateToProps, null)(SearchResults));
