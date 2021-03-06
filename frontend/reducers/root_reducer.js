import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import products from './products_reducer';
import items from './shopping_cart_items_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  ui,
  products,
  items
});

export default rootReducer;
