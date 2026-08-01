import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useAuth } from '../hooks/authHooks'

export const RegisterPage = () => {
    const { register, handleSubmit, navigate, handleRegister } = useAuth()
  return (
    <div>
        <form onSubmit={handleSubmit(handleRegister)}>
            <input placeholder='Enter Email' type="text"  {...register("name", {
                required: "Name is required"
            })}/>
            <input placeholder='Enter Email' type="email"  {...register("email", {
                required: "Email is required"
            })}/>
            <input type="password" {...register("password", {
                required: "Password is required",
                minLength: {
                    value: 0,
                    message:"Minimum 8 characters is required"
                }
            })} />
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}
