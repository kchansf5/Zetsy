import merge from 'lodash/merge';

import {
  RECEIVE_ALL_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM } from '../actions/shopping_cart_item_actions';

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ITEMS:
      return action.items;
    case RECEIVE_ITEM:
      const newItem = action.item;
      return merge({}, state, { [newItem.product_id]: newItem});
    case REMOVE_ITEM:
      let newState = merge({}, state);
      delete newState[action.item];
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
