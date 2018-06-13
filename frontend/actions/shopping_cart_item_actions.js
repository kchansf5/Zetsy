import * as CartAPIUtil from '../util/shopping_cart_api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const receiveItems = (items) => ({
  type: RECEIVE_ALL_ITEMS,
  items
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  item
});

export const fetchEntireCart = () => dispatch => (
  CartAPIUtil.fetchCartItem().then((items) => dispatch(receiveItems(items)))
);

export const createItem = item => dispatch => (
  CartAPIUtil.createCartItem(item).then(item => dispatch(receiveItem(item)))
);

export const updateItem = item => dispatch => (
  CartAPIUtil.updateCartItem(item).then(item => dispatch(receiveItem(item)))
);

export const deleteItem = item => dispatch => (
  CartAPIUtil.removeCartItem(item).then(item => dispatch(removeItem(item)))
);
