import { connect } from 'react-redux';
import React from 'react';
import CartItems from './cart_items';
import { selectAllItems } from '../../reducers/selectors';
import {
  fetchEntireCart,
  createItem,
  updateItem,
  removeItem,
  deleteItem,
  deleteAllItems} from '../../actions/shopping_cart_item_actions';

const mapStateToProps = (state) => {

  return {
    items: selectAllItems(state),
    user_id: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEntireCart: () => dispatch(fetchEntireCart()),
    createItem: (item) => dispatch(createItem(item)),
    updateItem: (item) => dispatch(updateItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    deleteItem: (item) => dispatch(deleteItem(item)),
    deleteAllItems: () => dispatch(deleteAllItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
