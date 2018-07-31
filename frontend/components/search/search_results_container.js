import React from 'react';
import SearchResults from './search';
import { connect } from 'react-redux';
import {fetchSearchProduct} from '../../actions/product_actions';

const mapStateToProps = (state) => {
  return {
    searchResults: Object.values(state.entities.products)
  };
};

export default withRouter(connect(mapStateToProps, null)(SearchResults))
