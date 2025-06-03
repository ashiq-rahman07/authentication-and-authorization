import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
  withCredentials: true,
});

// Add a request interceptor to set the Authorization header
instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('authToken');
    if (token) {
      if (config.headers) {
        config.headers['Authorization'] = `${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;