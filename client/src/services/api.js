import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// === Token Utility ===
export const getToken = () => {
  try {
    return localStorage.getItem('token');
  } catch (e) {
    return null;
  }
};

// === Create axios instance ===
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // Change to true if using cookies
});

// === Request interceptor to add token ===
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

// === Response interceptor to handle errors ===
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (import.meta.env.DEV) {
      console.error('API Error:', error.response || error.message);
    }

    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default api;

//
// === Auth API ===
export const authAPI = {
  login: (email, password) =>
    api.post('/auth/login', { email, password }),

  register: (userData) =>
    api.post('/auth/register', userData),

  getProfile: () =>
    api.get('/auth/me'),

  updateProfile: (profileData) =>
    api.put('/auth/profile', profileData),
};

//
// === Jobs API ===
export const jobsAPI = {
  getJobs: (params) =>
    api.get('/jobs', { params }),

  getJob: (id) =>
    api.get(`/jobs/${id}`),

  createJob: (jobData) =>
    api.post('/jobs', jobData),

  updateJob: (id, jobData) =>
    api.put(`/jobs/${id}`, jobData),

  deleteJob: (id) =>
    api.delete(`/jobs/${id}`),

  applyForJob: (id, applicationData) =>
    api.post(`/jobs/${id}/apply`, applicationData),

  getJobApplications: (id) =>
    api.get(`/jobs/${id}/applications`),
};

//
// === Applications API ===
export const applicationsAPI = {
  getMyApplications: () =>
    api.get('/applications/my-applications'),

  updateApplicationStatus: (id, status, notes) =>
    api.put(`/applications/${id}/status`, { status, notes }),
};

//
// === Admin API ===
export const adminAPI = {
  getStats: () =>
    api.get('/admin/stats'),

  getUsers: () =>
    api.get('/admin/users'),

  toggleUserStatus: (id) =>
    api.put(`/admin/users/${id}/toggle-status`),

  getJobs: () =>
    api.get('/admin/jobs'),

  getApplications: () =>
    api.get('/admin/applications'),
};

//
// === Users API ===
export const usersAPI = {
  getUsers: () =>
    api.get('/users'),

  getUser: (id) =>
    api.get(`/users/${id}`),

  updateUser: (id, userData) =>
    api.put(`/users/${id}`, userData),

  deleteUser: (id) =>
    api.delete(`/users/${id}`),

  toggleUserStatus: (id) =>
    api.put(`/users/${id}/toggle-status`),

  getUserStats: () =>
    api.get('/users/stats/overview'),

  searchUsers: (query) =>
    api.get(`/users/search/${query}`),

  verifyUser: (id) =>
    api.put(`/users/${id}/verify`),
};
