import React from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import {fetchSearchProduct} from '../../actions/product_actions';
import SearchBar from './search';

const mapStateToProps = (state, ownProps) => {
  return {
    products: Object.values(state.entities.products)
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchSearchProduct: query => dispatch(fetchSearchProduct(query))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
