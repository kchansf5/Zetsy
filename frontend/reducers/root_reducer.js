import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import products from './products_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  ui,
  products
});

export default rootReducer;
