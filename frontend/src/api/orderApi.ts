import { OrderInformationType, OrderInformationTypeForPost } from '../types';
import apiClient from './axiosClient';

const getAllOrder = async () => {
  const response = await apiClient.get<OrderInformationType[]>('/get_all');
  console.log(response);
  return response.data;
};

const storeOrder = async (order: OrderInformationTypeForPost) => {
  const response = await apiClient.post<OrderInformationType>('/orders', order);
  return response.data;
};

const updateOrder = async (order: OrderInformationType) => {
  const response = await apiClient.put<OrderInformationType>(
    `/orders/${order._id}`,
    order,
  );
  return response.data;
};

const destroyOder = async (id: string) => {
  const response = await apiClient.delete<OrderInformationType>(
    `/orders/${id}`,
  );
  return response.data;
};

const orderApi = {
  getAllOrder,
  storeOrder,
  updateOrder,
  destroyOder,
};

export default orderApi;
