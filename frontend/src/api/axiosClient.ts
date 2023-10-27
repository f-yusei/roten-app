import axios from 'axios';
const baseURL = import.meta.env.VITE_BACKEND_SERVER_URL;

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  },
);

export default apiClient;
