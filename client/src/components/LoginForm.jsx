import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../auth/useAuth';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');
  const navigate = useNavigate();
  const { login, loading: authLoading, error: authError } = useAuth();

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setLocalError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setLocalError(err.message || 'Login failed. Please check your credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const errorToDisplay = localError || authError;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-800">Login</h2>
      
      {errorToDisplay && (
        <div 
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 flex items-start" 
          role="alert"
          aria-live="assertive"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>{errorToDisplay}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} disabled={authLoading}>
        <div className="mb-4">
          <label 
            htmlFor="email" 
            className="block text-gray-700 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            disabled={authLoading}
            className={`w-full px-4 py-2 border ${errorToDisplay ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${authLoading ? 'bg-gray-50' : ''}`}
            placeholder="you@example.com"
            aria-describedby="email-help"
          />
          <p id="email-help" className="mt-1 text-sm text-gray-500">
            We'll never share your email with anyone else.
          </p>
        </div>

        <div className="mb-6">
          <label 
            htmlFor="password" 
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              disabled={authLoading}
              className={`w-full px-4 py-2 border ${errorToDisplay ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${authLoading ? 'bg-gray-50' : ''}`}
              placeholder="••••••••"
              minLength={8}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              disabled={authLoading}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-500" />
              ) : (
                <Eye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          <div className="mt-1 flex justify-between">
            <p className="text-sm text-gray-500">
              Min. 8 characters
            </p>
            <Link 
              to="/forgot-password" 
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              disabled={authLoading}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label 
              htmlFor="remember" 
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={authLoading}
            className={`w-full flex justify-center items-center py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ${
              authLoading 
                ? 'bg-indigo-400 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
            aria-busy={authLoading}
          >
            {authLoading ? (
              <>
                <svg 
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <Link 
            to="/register" 
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;