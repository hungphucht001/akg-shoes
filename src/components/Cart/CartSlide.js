const initState = {
    visible: false
}

const cartComponentReducer = (state = initState, action) => {
    switch (action.type) {
        case "cart/toggleCartComponent":
            state = {
                visible: action.payload
            }
            return state
        default:
            return state
    }
}

export default cartComponentReducer