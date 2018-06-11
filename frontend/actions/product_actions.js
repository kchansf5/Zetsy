import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_SINGLE_PRODUCT = 'RECEIVE_SINGLE_PRODUCT';

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveSingleProduct = payload => ({
  type: RECEIVE_SINGLE_PRODUCT,
  payload
});

export const requestProducts = () => (dispatch) => (
  APIUtil.fetchProducts().then(products => dispatch(receiveProducts(products)))
);

export const requestSingleProduct = (id) => (dispatch) => (
  APIUtil.fetchSingleProduct(id).then(product => dispatch(receiveSingleProduct(product)))
);
