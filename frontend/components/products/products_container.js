import { connect } from 'react-redux';
import React from 'react';
import Products from './products';
import { requestProducts } from '../../actions/product_actions';
import { selectAllProducts } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    products: selectAllProducts(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestProducts: () => dispatch(requestProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
