import React from 'react'
import { Navigate, useNavigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const isAdmin = false;

    if(!isAdmin) {
        return <Navigate to={"/contact"} replace/>
    }
  return children
}

export default ProtectedRoute