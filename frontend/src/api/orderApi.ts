import { OrderInformationType } from '../types';
import apiClient from './axiosClient';

//TODO: add type
const orderApi = {
  getAll: () => apiClient.get('/get_all'),
  store: (params: any) => apiClient.post('/orders', params),
  update: (params: OrderInformationType) => apiClient.put(`/orders/${params._id}`, params),
  delete: (id: number) => apiClient.delete(`/orders/${id}`),
};

export default orderApi;
