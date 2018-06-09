import { connect } from 'react-redux';
import React from 'react';
import Products from './products';
import { requestProducts } from '../../actions/product_actions';

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestProducts: () => dispatch(requestProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
//
