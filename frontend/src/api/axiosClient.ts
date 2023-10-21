import axios from 'axios';

const apiClient = axios.create({
  //TODO: 環境変数をenvファイルに移す
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 2000,
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
