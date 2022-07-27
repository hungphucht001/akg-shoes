const initState = {}
const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'auth/setAuth': {
            localStorage.setItem('accessToken', action.payload)
            return { ...state, accessToken: action.payload };
        }
        default:
            return state;
    }
}

export default AuthReducer