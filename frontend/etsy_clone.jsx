
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions.js';
import { deleteAllItems } from './actions/shopping_cart_item_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.deleteAllItems = deleteAllItems;
  window.store = store;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
