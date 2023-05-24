import axios from 'axios';
import { toast } from 'react-toastify';

const api = (headers = null) => {
  let header = headers;
  const user = JSON.parse(localStorage.getItem('user'));

  if (!header) {
    header = { Accept: 'application/json', 'Content-Type': 'application/json' };
  }

  // if (user) headers.Authorization = `Bearer ${user.token}`;

  const apiSet = axios.create({
    // baseURL: 'https://.com/api/',
    headers: user ? { ...header, Authorization: `Bearer ${user.token}` } : header
  });

  apiSet.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('user');
        window.location.href = '/';
      }

      let { message } = error.response.data;

      if (!message) {
        message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }

      const errors = {
        errors: error.response.data.errors,
        message
      };

      toast.error(message);

      throw errors;
    }
  );
  return apiSet;
};

export default api;
