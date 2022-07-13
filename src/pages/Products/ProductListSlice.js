const initState = {
    pag:{
        s: 1,
        page: 0,
        type: 'desc',
        col: 'id'
    },
    data: []
}

const productListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'productList/addProduct':
            return {
                ...state,
                data: state.data.concat(action.payload)
            }
        case 'productList/addPage':
            {
            return {
                ...state,
                pag: action.payload
            }
        }
        case 'productList/sortProduct':
            {
            return {
                data:[],
                pag: action.payload
            }
        }
        default:
            return state;
        }
    }
export default productListReducer