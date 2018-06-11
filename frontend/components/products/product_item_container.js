import { connect } from 'react-redux';
import React from 'react';
import ProductItem from './product_item';
import { requestSingleProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
  const singleProduct = state.products[ownProps.match.params.productId];

  return {
    singleProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSingleProduct: (id) => dispatch(requestSingleProduct(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
