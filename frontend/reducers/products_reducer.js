import merge from 'lodash/merge';

import { RECEIVE_PRODUCTS, RECEIVE_SINGLE_PRODUCT } from '../actions/product_actions';

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_SINGLE_PRODUCT:
      const newProduct = action.payload.product;
      return merge({}, state, { [newProduct.id]: newProduct});
    default:
      return state;
  }
};

export default productsReducer;
