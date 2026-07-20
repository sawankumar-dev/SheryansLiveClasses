import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router';
import { Auth } from '../context/AuthContext';

const RegisterPage = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  // Watch password field to compare it with confirm password
  const password = watch('password');
  const {registerdUser, setRegisteredUser} = useContext(Auth)
  // Handle form submission
  const onSubmit = (data) => {
    const { username, email, password } = data;
    const user = {
        username,
        email,
        password
    }
    localStorage.setItem("users", JSON.stringify([user]))
    reset()
    // Add your signup API call here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Create Account</h2>
          <p className="mt-2 text-sm text-gray-600">Get started with your free account today</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          
          {/* Username Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="johndoe"
              {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters',
                },
              })}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-200 ${
                errors.username
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
              }`}
            />
            {errors.username && (
              <p className="mt-1 text-xs font-medium text-red-500">{errors.username.message}</p>
            )}
          </div>

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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
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

          {/* Confirm Password Input (Recheck) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) =>
                  value === password || 'Passwords do not match',
              })}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-200 ${
                errors.confirmPassword
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
              }`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs font-medium text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start">
            <input
              id="terms"
              type="checkbox"
              {...register('terms', { required: 'You must accept the terms' })}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div className="ml-2 text-sm">
              <label htmlFor="terms" className="text-gray-700 select-none">
                I agree to the{' '}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Privacy Policy
                </a>
              </label>
              {errors.terms && (
                <p className="mt-1 text-xs font-medium text-red-500">{errors.terms.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200 mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <NavLink to="/auth/login"  className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
