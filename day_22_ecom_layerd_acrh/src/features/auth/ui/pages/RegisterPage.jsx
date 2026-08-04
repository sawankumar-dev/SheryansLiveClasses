import React from 'react';
import { ArrowRight, Mail, Lock, User } from 'lucide-react'; // Premium Visual Icons
import { useAuth } from '../../hooks/useAuthHook';
import { NavLink } from 'react-router';

export const RegisterPage = () => {
  const { navigate, handleSubmit, register, registerForm } = useAuth()
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-950 via-slate-900 to-purple-950 p-4">
      {/* Dynamic Background Glows */}
      
      <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20 top-10 right-10"></div>
      <div className="absolute w-80 h-80 bg-purple-600 rounded-full blur-[120px] opacity-20 bottom-10 left-10"></div>

      {/* Main Premium Glass Card */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
        
        {/* Top Visual Emblem (No Text) */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-linear-to-tr from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 mb-4">
            <User className="w-8 h-8 text-white animate-pulse" />
          </div>
          <div className="h-1.5 w-24 bg-linear-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        {/* Credentials Form */}
        <form className="space-y-5" onSubmit={handleSubmit(registerForm)}>
          
          {/* Text Input (Username) */}
          <div className="relative">
            <label className="block text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2 ml-1">
              Account Identifier
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-4 w-5 h-5 text-purple-400/60" />
              <input 
                type="text" 
                placeholder="Choose username"
                {...register("username")}
                className="w-full bg-slate-900/60 border border-purple-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label className="block text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2 ml-1">
              Electronic Mail
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-5 h-5 text-purple-400/60" />
              <input 
                type="email" 
                placeholder="name@company.com"
                {...register("email", {
                  required: "Email is required."
                })}
                className="w-full bg-slate-900/60 border border-purple-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2 ml-1">
              Security Access Key
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-5 h-5 text-purple-400/60" />
              <input 
                type="password" 
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required."
                })}
                className="w-full bg-slate-900/60 border border-purple-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Action Button */}
          <button 
            type="submit" 
            className="w-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-purple-600/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group mt-2"
          >
            <span>Create Account</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        <NavLink to="/auth">Login</NavLink>
      </div>
    </div>
  );
};
