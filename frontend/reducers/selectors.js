import values from 'lodash/values';

export const selectAllProducts = state => values(state.products);
