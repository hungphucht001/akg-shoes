import { createSelector } from 'reselect';

export const productListSelector = (state) => state.productList

export const todosRemainingSelector = createSelector(
    productListSelector,
    (productList) => productList)