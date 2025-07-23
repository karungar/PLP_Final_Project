let currentUser = null;
let loading = true;
let error = null;
const listeners = new Set();

const initializeAuth = () => {
  try {
    const storedUser = localStorage.getItem('afribridge_user');
    if (storedUser) {
      currentUser = JSON.parse(storedUser);
    }
  } catch (err) {
    localStorage.removeItem('afribridge_user');
    error = 'Failed to load user session';
  } finally {
    loading = false;
    notifyListeners();
  }
};

const notifyListeners = () => {
  listeners.forEach(listener => listener());
};

export const register = async (userData) => {
  loading = true;
  error = null;
  notifyListeners();
  
  try {
    const { password, confirmPassword, ...safeUserData } = userData;
    const newUser = {
      id: `user_${Date.now()}`,
      ...safeUserData,
      role: 'user',
      createdAt: new Date().toISOString()
    };
    
    localStorage.setItem('afribridge_user', JSON.stringify(newUser));
    currentUser = newUser;
    return newUser;
  } catch (err) {
    error = 'Registration failed';
    throw err;
  } finally {
    loading = false;
    notifyListeners();
  }
};

export const login = async (email, password) => {
  loading = true;
  error = null;
  notifyListeners();
  
  try {
    const storedUser = localStorage.getItem('afribridge_user');
    if (!storedUser) throw new Error('User not found');
    
    const user = JSON.parse(storedUser);
    if (user.email !== email) throw new Error('Invalid credentials');
    
    currentUser = user;
    return user;
  } catch (err) {
    error = 'Login failed. Check credentials';
    throw new Error(error);
  } finally {
    loading = false;
    notifyListeners();
  }
};

export const logout = () => {
  localStorage.removeItem('afribridge_user');
  currentUser = null;
  notifyListeners();
};

export const updateProfile = async (updateData) => {
  loading = true;
  error = null;
  notifyListeners();
  
  try {
    if (!currentUser) throw new Error('No authenticated user');
    
    const updatedUser = {
      ...currentUser,
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem('afribridge_user', JSON.stringify(updatedUser));
    currentUser = updatedUser;
    return updatedUser;
  } catch (err) {
    error = 'Profile update failed';
    throw err;
  } finally {
    loading = false;
    notifyListeners();
  }
};

export const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const getAuthState = () => ({
  currentUser,
  loading,
  error,
  isAuthenticated: !!currentUser
});

// Initialize on load
initializeAuth();