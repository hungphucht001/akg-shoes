import { combineReducers } from 'redux'
import productListReducer from '~/pages/Products/ProductListSlice'
import sortProductReducer from '~/components/SortProduct/SortProductSlice'

const rootReducer = combineReducers({
    productList: productListReducer,
    sortProduct: sortProductReducer
})

export default rootReducer