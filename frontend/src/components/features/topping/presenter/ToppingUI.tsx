import { Box, Grid, GridItem } from '@chakra-ui/react';
import { PureCarousel } from '../../../../common/PureCarousel';
import ToppingInformationModal from './ToppingInformationModal';
import { useEffect, useState } from 'react';
import { OrderInformationType } from '../../../../types';
import { v4 } from 'uuid';

type ToppingUIProps = {
  setAllOrders: (orders: OrderInformationType[]) => void;
  updateOrderState: (order: OrderInformationType) => void;
  orders: OrderInformationType[];
};

const ToppingUI = ({
  setAllOrders,
  updateOrderState,
  orders,
}: ToppingUIProps) => {
  const [waitingOrders, setWaitingOrders] = useState<OrderInformationType[]>([
    {
      _id: '6533ae6bfb99ad75540d3592',
      woodenNumber: 1,
      orderState: 'waiting',
      orderStateLogs: {
        orderReceivedAt: undefined,
        readiedAt: undefined,
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
            mayo: true,
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

  useEffect(() => {
    if (!orders) return;
    setWaitingOrders(orders.filter((order) => order.orderState === 'waiting'));
  }, [orders, setAllOrders]);
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {waitingOrders ? (
          waitingOrders.slice(0, 5).map((order) => (
            <GridItem key={order._id}>
              <ToppingInformationModal
                order={order}
                updateOrderState={updateOrderState}
              />
            </GridItem>
          ))
        ) : (
          <Box>お疲れ様でした。ちょっと休憩...</Box>
        )}
        <GridItem key={5}>
          <PureCarousel cardInformation={[]} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default ToppingUI;
