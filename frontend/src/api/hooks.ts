import { useQuery } from 'react-query';
import { OrderInformationType } from '../types';
import orderApi from './orderApi';
export const useGetAllOrder = () => {
  const { data: orders, isLoading } = useQuery<OrderInformationType[]>(
    'orders',
    () => orderApi.getAllOrder(),
  );
  return { orders, isLoading };
};
