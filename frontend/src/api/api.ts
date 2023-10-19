import { OrderType } from '../types';
import apiClient from './axiosClient';
const orderApi = {
  store: (params: OrderType) => {
    const url = '/orders';
    return apiClient.post(url, params);
  },
  delete: (id: number) => {
    const url = `/orders/${id}`;
    return apiClient.delete(url);
  },
  update: (id: number, params: OrderType) => {
    const url = `/orders/${id}`;
    return apiClient.put(url, params);
  },
  getAll: () => {
    const url = '/orders';
    return apiClient.get(url);
  },
};

export default orderApi;
