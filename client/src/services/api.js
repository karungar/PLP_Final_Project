// services/api.js
import axios from 'axios';

// Get base URL from environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Token management utility
export const getToken = () => {
  try {
    return localStorage.getItem('token');
  } catch (e) {
    console.error('Failed to get token:', e);
    return null;
  }
};

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// Request interceptor - adds auth token to headers
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handles global errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log errors in development
    if (import.meta.env.DEV) {
      console.error('API Error:', error.response || error.message);
    }

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login?sessionExpired=true';
      }
    }

    return Promise.reject(error);
  }
);

// ======================
//  AUTHENTICATION API
// ======================
export const authAPI = {
  login: (email, password) => api.post('/users/login', { email, password }),
  register: (userData) => api.post('/users', userData),
  getProfile: () => api.get('/users/profile'),
  updateProfile: (profileData) => api.put('/users/profile', profileData),
};

// ======================
//  USER MANAGEMENT API
// ======================
export const userAPI = {
  getAll: (params = {}) => api.get('/users', { params }),
  getById: (id) => api.get(`/users/${id}`),
  updateUser: (id, userData) => api.put(`/users/${id}`, userData),
  deleteUser: (id) => api.delete(`/users/${id}`),
  toggleStatus: (id) => api.put(`/users/${id}/toggle-status`),
};

// ======================
//  OPPORTUNITIES API
// ======================
export const opportunityAPI = {
  // Basic CRUD
  create: (data) => api.post('/opportunities', data),
  getAll: (params = {}) => api.get('/opportunities', { params }),
  getById: (id) => api.get(`/opportunities/${id}`),
  update: (id, data) => api.put(`/opportunities/${id}`, data),
  delete: (id) => api.delete(`/opportunities/${id}`),
  
  // Featured & Special Endpoints
  getFeatured: () => api.get('/opportunities/featured'),
  getByUser: (userId) => api.get(`/opportunities/user/${userId}`),
  
  // Applications
  apply: (opportunityId, applicationData) => 
    api.post(`/opportunities/${opportunityId}/apply`, applicationData),
};

// ======================
//  TALENTS API
// ======================
export const talentAPI = {
  // Profile Management
  createOrUpdate: (data) => api.post('/talents', data),
  getMyProfile: () => api.get('/talents/me'),
  deleteProfile: () => api.delete('/talents/me'),
  
  // Public Access
  getAll: (params = {}) => api.get('/talents', { params }),
  getById: (id) => api.get(`/talents/${id}`),
  getFeatured: () => api.get('/talents/featured'),
  search: (query) => api.get('/talents/search', { params: { q: query } }),
  
  // Admin Functions
  approve: (id) => api.put(`/talents/${id}/approve`),
};

// ======================
//  APPLICATIONS API
// ======================
export const applicationAPI = {
  // User Applications
  getMyApplications: () => api.get('/applications/me'),
  getById: (id) => api.get(`/applications/${id}`),
  withdraw: (id) => api.delete(`/applications/${id}`),
  
  // Opportunity-specific
  getForOpportunity: (opportunityId) => 
    api.get(`/opportunities/${opportunityId}/applications`),
  
  // Status Management
  updateStatus: (id, status) => 
    api.put(`/applications/${id}/status`, { status }),
};

// ======================
//  CONTACTS API
// ======================
export const contactAPI = {
  create: (data) => api.post('/contacts', data),
  getAll: (params = {}) => api.get('/contacts', { params }),
  getById: (id) => api.get(`/contacts/${id}`),
  update: (id, data) => api.put(`/contacts/${id}`, data),
  delete: (id) => api.delete(`/contacts/${id}`),
};

// ======================
//  ADMIN API
// ======================
export const adminAPI = {
  // Dashboard
  getStats: () => api.get('/admin/stats'),
  
  // User Management
  getAllUsers: (params = {}) => api.get('/admin/users', { params }),
  updateUserRole: (id, role) => api.put(`/admin/users/${id}/role`, { role }),
  
  // Content Management
  getAllOpportunities: (params = {}) => api.get('/admin/opportunities', { params }),
  getAllTalents: (params = {}) => api.get('/admin/talents', { params }),
  getAllApplications: (params = {}) => api.get('/admin/applications', { params }),
  
  // Moderation
  toggleOpportunityStatus: (id, isActive) => 
    api.put(`/admin/opportunities/${id}/status`, { isActive }),
};

// ======================
//  UTILITY API
// ======================
export const utilAPI = {
  uploadImage: (file) => {
    const formData = new FormData();
    formData.append('image', file);
    return api.post('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  getCountries: () => api.get('/utils/countries'),
  getSkills: () => api.get('/utils/skills'),
};

export default api;