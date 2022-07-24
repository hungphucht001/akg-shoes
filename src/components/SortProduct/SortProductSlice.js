
const initState = {
    s: 1,
    page: 0,
    type: 'desc',
    col: 'id'
}

const sortProductReducer = (state = initState, action)=>{
    switch (action.type) 
    {
        case 'productList/sortProduct':
            {
                return action.payload
            }
        case 'productList/addPage':
            {
            return action.payload
        }
        default:
            return state;
    }
}
export default sortProductReducer