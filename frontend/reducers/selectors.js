import values from 'lodash/values';

export const selectAllProducts = state => values(state.products);
export const selectAllItems = state => values(state.items);
