import { Box, Grid, GridItem } from '@chakra-ui/react';
import { PureCarousel } from '../../../../common/PureCarousel';
import ToppingInformationModal from './ToppingInformationModal';
import { useEffect, useState } from 'react';
import { OrderInformationType } from '../../../../types';

type ToppingUIProps = {
  updateOrderState: (order: OrderInformationType) => void;
  setAllOrders: (orders: OrderInformationType[]) => void;
  orders: OrderInformationType[];
};

const ToppingUI = ({ updateOrderState, orders }: ToppingUIProps) => {
  const [waitingOrders, setWaitingOrders] = useState<OrderInformationType[]>(
    [],
  );
  const [historyOrders, setHistoryOrders] = useState<OrderInformationType[]>(
    [],
  );
  useEffect(() => {
    const waitingOrders = orders.filter(
      (order) => order.orderState === 'waiting',
    );
    const historyOrders = orders.filter(
      (order) => order.orderState !== 'waiting',
    );

    setWaitingOrders(waitingOrders);
    setHistoryOrders(historyOrders);
  }, [orders]);
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
          <PureCarousel cardInformation={historyOrders} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default ToppingUI;
