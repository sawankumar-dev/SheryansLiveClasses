import { ArrowRight, Mail, Lock } from 'lucide-react'; // Visual icons ke liye
import { useAuth } from '../../hooks/useAuthHook';
import { NavLink } from 'react-router';

const LoginPage = () => {
  const { navigate, register, handleSubmit, loginForm} = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-950 via-slate-900 to-purple-950 p-4">
      {/* Glow Effect Background */}
      <div className="absolute w-80 h-80 bg-purple-600 rounded-full blur-[120px] opacity-20 top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20 bottom-10 right-10"></div>

      {/* Main Glassmorphism Card */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
        
        {/* Branding / Logo Space */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-linear-to-tr from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 mb-4">
            <Lock className="w-8 h-8 text-white animate-pulse" />
          </div>
          <div className="h-2 w-20 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit(loginForm)}>
          {/* Email Input */}
          <div className="relative">
            <label className="block text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2 ml-1">
              Username
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-5 h-5 text-purple-400/60" />
              <input 
                type="text" 
                {...register("username", {
                  required: "Email is required"
                })}
                placeholder="name@company.com"
                className="w-full bg-slate-900/60 border border-purple-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2 ml-1">
              Security Key
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-5 h-5 text-purple-400/60" />
              <input 
                type="password" 
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required."
                })}
                className="w-full bg-slate-900/60 border border-purple-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-purple-600/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Proceed</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        <NavLink to='/auth/register'>Register</NavLink>
      </div>
    </div>
  );
};

export default LoginPage;
