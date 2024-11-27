import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    console.log('Request config:', config); // Add this line
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Não autorizado!');
    }
    return Promise.reject(error);
  }
);

export const sendDataToAPI = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response;
  } catch (error) {
    console.error('Error sending data to API:', error);
    throw error;
  }
};

export default api;
