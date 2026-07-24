import React, { useContext } from 'react'
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const { loginSubmit, register, handleSubmit } = useAuth();
  return (
    <div><h1>this is login page</h1>
    <form onSubmit={handleSubmit(loginSubmit)}>
      <input type="email" {...register("email")} />
      <input type="password" {...register("password")} />
      <button type="submit">Login</button>
      </form></div>
  )
}

export default LoginPage