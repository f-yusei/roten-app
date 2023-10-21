import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  HStack,
  Button,
} from '@chakra-ui/react';
import { PureCarousel } from '../../../../common/PureCarousel';
import { OrderInformationType } from '../../../../types';
import { useState } from 'react';
import orderApi from '../../../../api/orderApi';

const DeliveryUI = () => {
  const orders: OrderInformationType[] = [
    {
      _id: '6533ae6bfb99ad75540d3592',
      woodenNumber: 1,
      orderState: 'available',
      menus: [
        {
          name: 'ソース',
          price: 250,
          arranges: {
            ソース: true,
            マヨ: true,
            カツオ: true,
            アオサ: true,
          },
        },
        {
          name: 'めんたい',
          price: 300,
          arranges: {
            ソース: true,
            めんたいマヨ: true,
            チーズ: true,
            カツオ: true,
          },
        },
      ],
    },
    {
      _id: '3',
      woodenNumber: 13,
      orderState: 'available',
      menus: [
        {
          name: 'めんたい（セット）前売り',
          price: 15,
          arranges: {
            ソース: true,
            めんたいマヨ: true,
            カツオ: true,
            チーズ: false,
          },
        },
      ],
    },
    {
      _id: '8',
      woodenNumber: 14,
      orderState: 'available',
      menus: [
        {
          name: 'ソース（セット）前売り',
          price: 15,
          arranges: {
            ソース: true,
            めんたいマヨ: false,
            カツオ: false,
            チーズ: false,
          },
        },
      ],
    },
    {
      _id: '4',
      woodenNumber: 3214,
      orderState: 'finished',
      menus: [
        {
          name: 'めんたい（セット）前売り',
          price: 15,
          arranges: {
            ソース: true,
            めんたいマヨ: true,
            カツオ: true,
            チーズ: false,
          },
        },
      ],
    },
  ];

  const availableOrders = orders.filter(
    (order) => order.orderState === 'available',
  );

  const [currentSelectOrder, setCurrentSelectOrder] = useState(
    availableOrders[0],
  );

  //選択した注文番号
  const handleClick = (order: OrderInformationType) => {
    setCurrentSelectOrder(order);
  };

  const discardOrder = async () => {
    const newOrder: OrderInformationType = {
      ...currentSelectOrder,
      orderState: 'discarded',
    };
    const res = await orderApi.update(newOrder);
    console.log(res);
  };

  const finishOrderDelivery = async () => {
    const newOrder: OrderInformationType = {
      ...currentSelectOrder,
      orderState: 'finished',
    };
    const res = await orderApi.update(newOrder);
    console.log(res);
  };

  return (
    <HStack>
      <Grid templateColumns="repeat(2, 1fr)">
        {availableOrders.slice(0, 6).map((order, index) => (
          <GridItem key={index}>
            <Button
              key={index}
              w="24vw"
              h="24vh"
              bgColor="gray.100"
              margin={2}
              onClick={() => handleClick(order)}
            >
              {order.woodenNumber}
            </Button>
          </GridItem>
        ))}
      </Grid>
      <Box>
        <Box>
          <Card h={'44vh'}>
            <CardBody>
              <Box height="25vh">
                <Box>{currentSelectOrder.woodenNumber}</Box>
                {currentSelectOrder.menus.map((menu, index) => (
                  <>
                    <Box key={index}>{menu.name}</Box>
                    <Box key={index}>トッピング</Box>
                    {Object.entries(menu.arranges).map(([topping, value]) => {
                      if (!value) {
                        return <Box key={topping}>-no {topping}</Box>;
                      }
                      return null;
                    })}
                  </>
                ))}
              </Box>
              <div className="oprButton">
                <HStack spacing="50px">
                  <Button
                    onClick={discardOrder}
                    height="8vh"
                    width="10vw"
                    m={5}
                    bgColor="red.500"
                  >
                    廃棄
                  </Button>
                  <Button
                    onClick={finishOrderDelivery}
                    height="8vh"
                    width="15vw"
                    m={5}
                    bgColor="green.300"
                  >
                    受け渡し
                  </Button>
                </HStack>
              </div>
            </CardBody>
          </Card>
        </Box>
        <Box h={'44vh'}>
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
        </Box>
      </Box>
    </HStack>
  );
};

export default DeliveryUI;
