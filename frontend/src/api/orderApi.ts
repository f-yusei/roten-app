import apiClient from './axiosClient';

//TODO: add type
const orderApi = {
  getAll: () => apiClient.get('/orders'),
  store: (params: any) => apiClient.post('/orders', params),
  update: (params: any) => apiClient.put(`/orders/${params._id}`, params),
  delete: (_id: string) => apiClient.delete(`/orders/${_id}`),
};

export default orderApi;
