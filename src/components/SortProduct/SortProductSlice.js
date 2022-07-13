const initState = {
    s: 1,
    type: 'asc',
    col: 'id',
    page: 1,
}

const sortProductReducer = (state = initState, action)=>{
    switch (action.type) 
    {
        case 'productList/sortProduct':
            return action.payload
        default:
            return state;
    }
}
export default sortProductReducer