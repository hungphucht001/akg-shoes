import { createSelector } from 'reselect';

export const productListSelector = (state) => state.productList
export const sortProductSelector = (state) => state.sortProduct

export const todosRemainingSelector = createSelector(
    productListSelector,
    (productList) => productList)