import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '~/redux/actions'

function PrivateRoute({ children }) {

    const dispatch = useDispatch();
    const token = localStorage.getItem('accessToken')
    if (token) {
        dispatch(setAuth(token))
        return children;
    }
    else {
        return <Navigate to="/login" />
    }

}

export default PrivateRoute
