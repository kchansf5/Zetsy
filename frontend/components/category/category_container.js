import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Category from './category_component';
import { requestProducts } from '../../actions/product_actions';
import { selectAllProducts } from '../../reducers/selectors';

const mapStateToProps = (state, ownParams) => {
  return {
    products: selectAllProducts(state),
    category: ownParams.match.params.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestProducts: () => dispatch(requestProducts())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
