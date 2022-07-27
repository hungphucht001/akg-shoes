import { combineReducers } from 'redux'
import productListReducer from '~/pages/Products/ProductListSlice'
import sortProductReducer from '~/components/SortProduct/SortProductSlice'
import cartComponentReducer from '~/components/Cart/CartSlide'
import cartReducer from '~/pages/Cart/CartSlide'
import AuthReducer from '~/components/PrivateRoute/AuthSlice'

const rootReducer = combineReducers({
    productList: productListReducer,
    sortProduct: sortProductReducer,
    cartComponent: cartComponentReducer,
    auth: AuthReducer,
    // cartList: cartReducer,
})

export default rootReducer