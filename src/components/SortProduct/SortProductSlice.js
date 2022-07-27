import pagination from "~/config/pagination"
const initState = {
    s: 1,
    page: 0,
    type: 'desc',
    col: 'id',
    min: pagination.min,
    max: pagination.max
}

const sortProductReducer = (state = initState, action) => {
    switch (action.type) {
        case 'productList/sortProduct':
            {
                return action.payload
            }
        case 'productList/addPage':
            {
                return action.payload
            }
        case 'productList/filterChangePrice':
            {
                return {
                    ...state,
                    page: 1,
                    min: action.payload[0],
                    max: action.payload[1]
                }
            }
        default:
            return state;
    }
}
export default sortProductReducer