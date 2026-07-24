import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
        <h1>This is AuthLayout</h1>
        <Outlet/>
    </div>
  )
}

export default AuthLayout