import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router';
import { Auth } from '../context/AuthContext';
import { jsx } from 'react/jsx-runtime';

const LoginPage = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setLoggedInUser, registerdUser} = useContext(Auth);
  const navigate =  useNavigate()
  // Handle form submission
  const onSubmit = (data) => {
    const user = registerdUser.find((obj) => {
        return obj.email === data.email && obj.password === data.password
    })
    if(!user) {
        alert("Invalid creds")
    }
    localStorage.setItem('user', JSON.stringify(user))
    setLoggedInUser(data)
    navigate("/")
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">Please enter your details to sign in</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-200 ${
                errors.email
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs font-medium text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-200 ${
                errors.password
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs font-medium text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 select-none">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <NavLink to={'/auth/register'} className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
