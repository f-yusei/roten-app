import { Box, Grid, GridItem } from '@chakra-ui/react';
import { PureCarousel } from '../../../../common/PureCarousel';
import ToppingInformationModal from './ToppingInformationModal';
import { useGetAllOrder } from '../../../../api/hooks';
import { createContext, useEffect, useState } from 'react';
import { OrderInformationType } from '../../../../types';

const { orders, isLoading } = useGetAllOrder();
const [allOrders, setAllOrders] = useState<OrderInformationType[]>([]);
export const OrderContext = createContext({});
export const SetOrderContext = createContext({ allOrders, setAllOrders });

const ToppingUI = () => {
  const [waitingOrders, setWaitingOrders] = useState<OrderInformationType[]>([
    {
      _id: '6533ae6bfb99ad75540d3592',
      woodenNumber: 1,
      orderState: 'available',
      menus: [
        {
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
    setAllOrders(orders);
    setWaitingOrders(
      allOrders.filter((order) => order.orderState === 'waiting'),
    );
  }, [orders]);

  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {waitingOrders ? (
          waitingOrders.slice(0, 5).map((order, index) => (
            <GridItem key={index}>
              <SetOrderContext.Provider value={{ allOrders, setAllOrders }}>
                <OrderContext.Provider value={{ orders, isLoading }}>
                  <ToppingInformationModal order={order} />
                </OrderContext.Provider>
              </SetOrderContext.Provider>
            </GridItem>
          ))
        ) : (
          <Box>お疲れ様でした。ちょっと休憩...</Box>
        )}
        <GridItem key={5}>
          <PureCarousel
            cardInformation={[
              {
                orderNumber: 1,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 2,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 3,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 4,
                menu: 'ソース',
                topping: 'メンタイ',
              },
            ]}
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default ToppingUI;
