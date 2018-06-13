import { connect } from 'react-redux';
import React from 'react';
import ProductItem from './product_item';
import { requestSingleProduct } from '../../actions/product_actions';
import { createItem} from '../../actions/shopping_cart_item_actions';

const mapStateToProps = (state, ownProps) => {
  const singleProduct = state.products[ownProps.match.params.productId];

  return {
    singleProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSingleProduct: (id) => dispatch(requestSingleProduct(id)),
    createItem: (item) => dispatch(createItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
