import { useDispatch } from 'react-redux';
import ToppingUI from '../presenter/ToppingUI';
import { OrderInformationType } from '../../../../types';
import { useGetAllOrder } from '../../../../api/hooks';

export const ToppingContainer = () => {
  const { orders } = useGetAllOrder();
  const dispatch = useDispatch();

  const setAllOrders = (orders: OrderInformationType[]) => {
    dispatch({ type: 'SET_ALL_ORDERS', payload: orders });
  };

  const updateOrderState = (order: OrderInformationType) => {
    dispatch({ type: 'UPDATE_ORDER_STATE', payload: order });
  };

  if (!orders) return <div>loading...</div>;

  const args = {
    setAllOrders: setAllOrders,
    updateOrderState: updateOrderState,
    orders: orders,
  };
  return <ToppingUI {...args} />;
};
