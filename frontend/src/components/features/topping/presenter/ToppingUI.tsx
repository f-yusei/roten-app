import { Grid, GridItem } from '@chakra-ui/react';
import { PureCarousel } from '../../../../common/PureCarousel';
import OrderConfirmationModal from '../../reception/presenter/OrderConfirmationModal';

type Order = {
  menus: string[];
  orderState: 'waiting' | 'available' | 'finished';
};

const ToppingUI = () => {
  const orders: Order[] = [
    {
      menus: ['ソース', 'メンタイ', 'ソース'],
      orderState: 'available',
    },
    {
      menus: ['２ソース', '３メンタイ'],
      orderState: 'available',
    },
    {
      menus: ['４ソース', '1メンタイ'],
      orderState: 'waiting',
    },
    {
      menus: ['ソース', 'メンタイ'],
      orderState: 'waiting',
    },
    {
      menus: ['ソース', 'メンタイ'],
      orderState: 'waiting',
    },
    {
      menus: ['ソース', 'メンタイ'],
      orderState: 'waiting',
    },
    {
      menus: ['ソース', 'メンタイ'],
      orderState: 'waiting',
    },
    {
      menus: ['ソース', 'メンタイ'],
      orderState: 'waiting',
    },
  ];
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {orders
          .filter((order) => order.orderState === 'waiting')
          .slice(0, 5)
          .map((order, index) => (
            <GridItem key={index}>
              <OrderConfirmationModal order={order} />
            </GridItem>
          ))}
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
