import React from 'react'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({ children, redirectTo }) => {
    const { isAuth } = useSelector(state => state.auth)
    let isAuthenticated = isAuth;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default ProtectRoute
