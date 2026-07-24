import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router';
import { MyStore } from '../context/AuthContext';

export const ProtectedRoute = () => {
    const { isLoggedIn } = useContext(MyStore);
    console.log(isLoggedIn)
    if(!isLoggedIn) {
      return <Navigate to="/auth" replace/>
    }
  return (
    <Outlet/>
  )
}
