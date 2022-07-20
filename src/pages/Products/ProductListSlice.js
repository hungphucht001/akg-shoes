const initState = []

const productListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'productList/addProduct':
            const newData = action.payload.filter((item) => state.map(item => item.id).includes(item.id) == false)
            return state.concat(newData)
        case 'productList/emptyProduct':
            {
                return []
            }
        default:
            return state;
    }
}
export default productListReducer