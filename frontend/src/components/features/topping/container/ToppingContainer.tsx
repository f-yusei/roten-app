import { useDispatch } from 'react-redux';
import ToppingUI from '../presenter/ToppingUI';
import { OrderInformationType } from '../../../../types';
import { useGetAllOrder } from '../../../../api/hooks';
import { useEffect,  useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

export const ToppingContainer = () => {
  const { orders } = useGetAllOrder();
  const dispatch = useDispatch();
  const { onOpen, onClose, isOpen } = useDisclosure();
  

  const setAllOrders = (orders: OrderInformationType[]) => {
    dispatch({ type: 'SET_ALL_ORDERS', payload: orders });
  };

  const updateOrderState = (order: OrderInformationType) => {
    dispatch({ type: 'UPDATE_ORDER_STATE', payload: order });
  };

  

  const [waitingOrders, setWaitingOrders] = useState<OrderInformationType[]>(
    [],
  );
  const [historyOrders, setHistoryOrders] = useState<OrderInformationType[]>(
    [],
  );
  useEffect(() => {
    const waitingOrders = orders?.filter(
      (order) => order.orderState === 'waiting',
    );
    const historyOrders = orders?.filter(
      (order) => order.orderState !== 'waiting',
    );

    setWaitingOrders(waitingOrders || []);
    setHistoryOrders(historyOrders || []);
  }, [orders]);

  if (!orders) return <div>loading...</div>;
  

  const args = {
    setAllOrders: setAllOrders,
    updateOrderState: updateOrderState,
    waitingOrders: waitingOrders,
    historyOrders: historyOrders,
    onOpen:onOpen,
    onClose:onClose,
    isOpen:isOpen,
  };
  return <ToppingUI {...args} />;
};
