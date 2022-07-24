import { combineReducers } from 'redux'
import productListReducer from '~/pages/Products/ProductListSlice'
import sortProductReducer from '~/components/SortProduct/SortProductSlice'
import cartComponentReducer from '~/components/Cart/CartSlide'

const rootReducer = combineReducers({
    productList: productListReducer,
    sortProduct: sortProductReducer,
    cartComponent: cartComponentReducer,
})

export default rootReducer