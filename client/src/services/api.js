import axios from 'axios';

if (!process.env.REACT_APP_API_URL) {
  throw new Error('REACT_APP_API_URL is not defined');
}

const API_URL = process.env.REACT_APP_API_URL;
const AUTH_URL = `${API_URL}/api/auth`;
const TODOS_URL = `${API_URL}/api/todos`;

// Auth API
const authApi = axios.create({
  baseURL: AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Todos API with token interceptor
const api = axios.create({
  baseURL: TODOS_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth functions
export const signupUser = async (username, password) => {
  const response = await authApi.post('/signup', { username, password });
  return response.data;
};

export const loginUser = async (username, password) => {
  const response = await authApi.post('/login', { username, password });
  return response.data;
};

// Todo functions
export const getTodos = async () => {
  const response = await api.get('/');
  return response.data;
};

export const getTodo = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

export const createTodo = async (title, description = '', completed = false) => {
  const response = await api.post('/', { title, description, completed });
  return response.data;
};

export const updateTodo = async (id, updates) => {
  const response = await api.put(`/${id}`, updates);
  return response.data;
};

export const deleteTodo = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Failed to delete todo';
    throw new Error(errorMessage);
  }
};
