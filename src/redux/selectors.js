import { createSelector } from 'reselect';

export const productListSelector = (state) => state.productList
export const sortProductSelector = (state) => state.sortProduct
export const cartComponentSelector = (state) => state.cartComponent

export const todosRemainingSelector = createSelector(
    productListSelector,
    (productList) => productList)