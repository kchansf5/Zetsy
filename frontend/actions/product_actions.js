import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_SINGLE_PRODUCT = 'RECEIVE_SINGLE_PRODUCT';
export const RECEIVE_SEARCH_PRODUCTS = 'RECEIVE_SEARCH_PRODUCTS';

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveSingleProduct = payload => ({
  type: RECEIVE_SINGLE_PRODUCT,
  payload
});

export const receiveSearchProducts = products => ({
  type: RECEIVE_SEARCH_PRODUCTS,
  products
});

export const requestProducts = () => (dispatch) => (
  APIUtil.fetchProducts().then(products => dispatch(receiveProducts(products)))
);

export const requestSingleProduct = (id) => (dispatch) => (
  APIUtil.fetchSingleProduct(id).then(product => dispatch(receiveSingleProduct(product)))
);

// export const fetchSearchProduct = (query) => (dispatch) => (
//   APIUtil.fetchSearchProducts(query).then(searchResult => dispatch(receiveSearchProducts(searchResult)))
// );
//
// export const fetchSearchProducts = query => {
//   return dispatch => {
//     return APIUtil.fetchSearchProducts(query).then(searchResults => {
//       return dispatch(receiveSearchProducts(searchResults));
//     });
//   };
// };

export const fetchSearchProduct = query => {
  return dispatch => {
    return APIUtil.fetchSearchProduct(query).then(searchProducts => {
      return dispatch(receiveSearchProducts(searchProducts));
    });
  };
};
