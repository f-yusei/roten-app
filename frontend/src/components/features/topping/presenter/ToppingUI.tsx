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
          name: 'ソース',
          price: 250,
          arranges: {
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
            sauce: true,
            mentaiMayo: true,
            katsuo: true,
            cheese: true,
          },
        },
      ],
    },
    {
      woodenNumber: 2,
      orderState: 'waiting',
      menus: [
        {
          name: 'ソース',
          price: 250,
          arranges: {
            sauce: true,
            mayo: false,
            katsuo: true,
            aosa: true,
          },
        },
        {
          name: 'めんたい',
          price: 300,
          arranges: {
            sauce: true,
            mentaiMayo: true,
            katsuo: true,
            cheese: true,
          },
        },
      ],
    },
    {
      woodenNumber: 3,
      orderState: 'waiting',
      menus: [
        {
          name: 'めんたい',
          price: 300,
          arranges: {
            sauce: true,
            mentaiMayo: true,
            katsuo: true,
            cheese: true,
          },
        },
        {
          name: 'めんたい',
          price: 300,
          arranges: {
            sauce: true,
            mentaiMayo: true,
            katsuo: true,
            cheese: true,
          },
        },
      ],
    },
    {
      woodenNumber: 4,
      orderState: 'waiting',
      menus: [
        {
          name: 'ソース',
          price: 250,
          arranges: {
            sauce: true,
            mayo: false,
            katsuo: true,
            aosa: true,
          },
        },
      ],
    },
    {
      woodenNumber: 5,
      orderState: 'waiting',
      menus: [
        {
          name: 'めんたい',
          price: 300,
          arranges: {
            sauce: true,
            mentaiMayo: true,
            katsuo: true,
            cheese: true,
          },
        },
      ],
    },
    {
      woodenNumber: 6,
      orderState: 'waiting',
      menus: [
        {
          name: 'めんたい',
          price: 300,
          arranges: {
            sauce: true,
            mentaiMayo: true,
            katsuo: true,
            cheese: true,
          },
        },
      ],
    },
    {
      woodenNumber: 7,
      orderState: 'waiting',
      menus: [
        {
          name: 'ソース',
          price: 250,
          arranges: {
            sauce: true,
            mayo: false,
            katsuo: true,
            aosa: true,
          },
        },
      ],
    },
    {
      woodenNumber: 8,
      orderState: 'waiting',
      menus: [
        {
          name: 'ソース',
          price: 250,
          arranges: {
            sauce: true,
            mayo: true,
            katsuo: false,
            aosa: true,
          },
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
