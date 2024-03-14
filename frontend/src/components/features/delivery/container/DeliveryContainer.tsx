import { OrderInformationType } from '../../../../types';
import { useEffect, useState } from 'react';
import orderApi from '../../../../api/orderApi';
import DeliveryUI from '../presenter/DeliveryUI'
import { useGetAllOrder } from '../../../../api/hooks';
import { v4 } from 'uuid';

const DeliveryContainer = () => {

  const { orders, isLoading } = useGetAllOrder();

  const [availableOrders, setAvailableOrders] = useState<
    OrderInformationType[]
  >([
    {
      _id: '6533ae6bfb99ad75540d3592',
      woodenNumber: 1,
      orderState: 'available',
      orderStateLogs: {
        orderReceivedAt: new Date(),
        readiedAt: new Date(),
        deliveredAt: undefined,
      },
      menus: [
        {
          id: v4(),
          name: 'ソース',
          price: 250,
          arranges: {
            kind: 'sauce',
            sauce: true,
            mayo: false,
            katsuo: true,
            aosa: true,
          },
        },
        {
          id: v4(),
          name: 'めんたい',
          price: 300,
          arranges: {
            kind: 'mentai',
            sauce: true,
            mentaiMayo: true,
            cheese: true,
            katsuo: true,
          },
        },
      ],
    },
  ]);

  const [currentSelectOrder, setCurrentSelectOrder] =
    useState<OrderInformationType | null>(availableOrders[0]);

  useEffect(() => {
    if (!orders) return;
    setAvailableOrders(
      orders.filter((order) => order.orderState === 'available'),
    );
  }, [orders]);

  if (isLoading) return <div>loading...</div>;
  //選択した注文番号
  const handleClick = (order: OrderInformationType) => {
    setCurrentSelectOrder(order);
  };

  const discardOrder = async () => {
    if (!currentSelectOrder) return;
    const newOrder: OrderInformationType = {
      ...currentSelectOrder,
      orderState: 'discarded',
    };
    try {
      const res = await orderApi.updateOrder(newOrder);
      console.log(res);
      //画面を更新する
      const newAvailableOrders = availableOrders.filter(
        (order) => order._id !== newOrder._id,
      );
      setAvailableOrders(newAvailableOrders);
      setCurrentSelectOrder(null);
    } catch (error) {
      console.log(error);
    }
  };

  const finishOrderDelivery = async () => {
    if (!currentSelectOrder) return;
    const newOrder: OrderInformationType = {
      ...currentSelectOrder,
      orderState: 'finished',
    };
    try {
      const res = await orderApi.updateOrder(newOrder);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const args = {
    availableOrders: availableOrders,
    currentSelectOrder: currentSelectOrder,
    handleClick: handleClick,
    discardOrder: discardOrder,
    finishOrderDelivery: finishOrderDelivery,
  };

  return (
    <DeliveryUI {...args} />
  )
}

export default DeliveryContainer 