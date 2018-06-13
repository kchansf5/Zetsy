import { connect } from 'react-redux';
import React from 'react';
import cartItems from './cart_items';
import { selectAllItems } from '../../reducers/selectos';
import {
  fetchEntireCart,
  createItem,
  updateItem,
  removeItem} from '../../actions/shopping_cart_item_actions';

const mapStateToProps = (state) => {
  return {
    items: selectAllItems(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEntireCart: () => dispatch(fetchEntireCart()),
    createItem: (item) => dispatch(createItem(item)),
    updateItem: (item) => dispatch(updateItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartItems);
