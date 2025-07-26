import { useState, useEffect, useCallback } from 'react';
import { 
  register, 
  login, 
  logout, 
  updateProfile, 
  subscribe,
  getAuthState
} from './authService';

export function useAuth() {
  const [state, setState] = useState(() => getAuthState());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  const unsubscribe = subscribe((newState) => {
    setState(newState);
    setError(null);
  });
  
  return () => {
    if (typeof unsubscribe === 'function') {
      unsubscribe();
      // Don't return the result of unsubscribe()
    }
  };
}, []);
  // Wrapper functions with error handling and loading states
  const handleRegister = useCallback(async (userData) => {
    try {
      setLoading(true);
      setError(null);
      const result = await register(userData);
      return result;
    } catch (err) {
      setError(err.message || 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = useCallback(async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const result = await login(credentials);
      return result;
    } catch (err) {
      setError(err.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      await logout();
    } catch (err) {
      setError(err.message || 'Logout failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUpdateProfile = useCallback(async (profileData) => {
    try {
      setLoading(true);
      setError(null);
      const result = await updateProfile(profileData);
      return result;
    } catch (err) {
      setError(err.message || 'Profile update failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    // Auth state
    ...state,
    
    // Loading and error states
    loading,
    error,
    
    // Auth actions
    register: handleRegister,
    login: handleLogin,
    logout: handleLogout,
    updateProfile: handleUpdateProfile,
    clearError
  };
}