import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedUser = localStorage.getItem('afribridge_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
      } catch (err) {
        localStorage.removeItem('afribridge_user');
      }
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    setError(null);
    try {
      // In a real app, this would be an API call
      // For now, simulate a successful registration
      const newUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        role: 'user',
        createdAt: new Date().toISOString()
      };
      
      // Store user in localStorage (simulating authentication)
      localStorage.setItem('afribridge_user', JSON.stringify(newUser));
      setCurrentUser(newUser);
      return newUser;
    } catch (err) {
      setError(err.message || 'Failed to register. Please try again.');
      throw err;
    }
  };

  const login = async (email, password) => {
    setError(null);
    try {
      // In a real app, this would be an API call
      // For now, simulate a successful login
      const user = {
        id: '12345',
        name: 'Demo User',
        email,
        role: 'user',
        createdAt: new Date().toISOString()
      };
      
      // Store user in localStorage (simulating authentication)
      localStorage.setItem('afribridge_user', JSON.stringify(user));
      setCurrentUser(user);
      return user;
    } catch (err) {
      setError(err.message || 'Failed to log in. Please check your credentials.');
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('afribridge_user');
    setCurrentUser(null);
  };

  const updateProfile = async (userData) => {
    setError(null);
    try {
      // In a real app, this would be an API call
      // For now, simulate a successful profile update
      const updatedUser = {
        ...currentUser,
        ...userData,
        updatedAt: new Date().toISOString()
      };
      
      // Update user in localStorage
      localStorage.setItem('afribridge_user', JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);
      return updatedUser;
    } catch (err) {
      setError(err.message || 'Failed to update profile. Please try again.');
      throw err;
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    register,
    login,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};