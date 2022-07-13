import { combineReducers } from 'redux'
import productListReducer from '~/pages/Products/ProductListSlice'

const rootReducer = combineReducers({
    productList: productListReducer,
})

export default rootReducer