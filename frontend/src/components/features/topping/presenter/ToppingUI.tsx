import { Grid, GridItem } from '@chakra-ui/react';
import { PureCarousel } from '../../../../common/PureCarousel';
import ToppingInformationModal from './ToppingInformationModal';
import { OrderType } from '../../../../types';

const ToppingUI = () => {
  const orders: OrderType[] = [
    {
      woodenNumber: 1,
      orderState: 'waiting',
      menus: [
        {
          isSauce: true,
          name: 'ソース',
          price: 250,
          arranges: [true, true, true, true],
        },
        {
          isSauce: false,
          name: 'めんたい',
          price: 300,
          arranges: [true, false, false, true],
        },
      ],
    },
    {
      woodenNumber: 2,
      orderState: 'waiting',
      menus: [
        {
          isSauce: true,
          name: 'ソース',
          price: 250,
          arranges: [true, false, true, true],
        },
        {
          isSauce: false,
          name: 'めんたい',
          price: 300,
          arranges: [true, false, true, true],
        },
      ],
    },
    {
      woodenNumber: 3,
      orderState: 'waiting',
      menus: [
        {
          isSauce: false,
          name: 'めんたい',
          price: 300,
          arranges: [true, false, true, true],
        },
        {
          isSauce: false,
          name: 'めんたい',
          price: 300,
          arranges: [true, false, true, true],
        },
      ],
    },
    {
      woodenNumber: 4,
      orderState: 'waiting',
      menus: [
        {
          isSauce: true,
          name: 'ソース',
          price: 250,
          arranges: [true, false, true, true],
        },
      ],
    },
    {
      woodenNumber: 5,
      orderState: 'waiting',
      menus: [
        {
          isSauce: false,
          name: 'めんたい',
          price: 300,
          arranges: [true, false, true, true],
        },
      ],
    },
    {
      woodenNumber: 6,
      orderState: 'waiting',
      menus: [
        {
          isSauce: false,
          name: 'めんたい',
          price: 300,
          arranges: [true, false, true, true],
        },
      ],
    },
    {
      woodenNumber: 7,
      orderState: 'waiting',
      menus: [
        {
          isSauce: true,
          name: 'ソース',
          price: 250,
          arranges: [true, false, true, true],
        },
      ],
    },
    {
      woodenNumber: 8,
      orderState: 'waiting',
      menus: [
        {
          isSauce: true,
          name: 'ソース',
          price: 250,
          arranges: [true, false, true, true],
        },
      ],
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
              <ToppingInformationModal order={order} />
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
