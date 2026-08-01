import React from 'react'
import { useAuth } from '../hooks/authHooks'

const LoginPage = () => {
    const { register, handleSubmit, handleLogin } = useAuth()
  return (
    <div >
        <form onSubmit={handleSubmit(handleLogin)}>
            <input type="email" {...register("email")}/>
            <input type="password" {...register("password")}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginPage