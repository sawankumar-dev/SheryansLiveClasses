import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { MyStore } from '../context/AuthContext';
import { useAuth } from '../hooks/useAuth';

const RegisterPage = () => {
   const { registerSubmit, register, handleSubmit } = useAuth();
  return (
    <div>
      <form onSubmit={handleSubmit(registerSubmit)}>
        <input 
          {...register("username")}
          type="text" placeholder="Username" />
        <input 
          {...register("email")}
          type="email" />
        <input 
          {...register("password")}
          type="password" />
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default RegisterPage