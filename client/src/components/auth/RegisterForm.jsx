import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    bio: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { name, email, password, confirmPassword, country, bio } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await onRegister(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // List of countries for the select dropdown
  const countries = [
    'Select Country', 'Japan', 'Nigeria', 'Kenya', 'South Africa', 'Ghana', 
    'Ethiopia', 'Rwanda', 'Tanzania', 'Uganda', 'Egypt', 'Morocco', 'Algeria',
    'Senegal', 'Other'
  ];

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-800">Create Account</h2>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-gray-700 font-medium mb-1">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {countries.map((country, index) => (
              <option key={index} value={index === 0 ? '' : country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label htmlFor="bio" className="block text-gray-700 font-medium mb-1">
            Bio (Optional)
          </label>
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Tell us a bit about yourself..."
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>
      </form>

      <p className="text-center mt-4 text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;