import apiClient from './axiosClient';

//TODO: add type
const orderApi = {
  getAll: () => apiClient.get('/orders'),
  store: (params: any) => apiClient.post('/orders', params),
  update: (params: any) => apiClient.put(`/orders/${params.id}`, params),
  delete: (id: number) => apiClient.delete(`/orders/${id}`),
};

export default orderApi;
