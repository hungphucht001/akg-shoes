const initState = []

const productListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'productList/addProduct':
            return state.concat(action.payload)
        case 'productList/emptyProduct':
            {
            return []
        }
        default:
            return state;
        }
    }
export default productListReducer