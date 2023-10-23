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
import { useEffect, useState } from 'react';
import orderApi from '../../../../api/orderApi';
import { useGetAllOrder } from '../../../../api/hooks';
import { v4 } from 'uuid';

const DeliveryUI = () => {
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

  //現在の時間とorder.orderStateLogs.readiedAtの差を計算する関数
  // const calculateSec = (order: OrderInformationType) => {
  //   const now = new Date();
  //   //注文受付からの経過時間を計算
  //   const readiedAt = order.orderStateLogs.readiedAt;
  //   if (!readiedAt) return 'lording...';
  //   const diff = now.getTime() - readiedAt.getTime();
  //   //秒数まで計算
  //   const diffSec = Math.floor(diff / 1000).toString();
  //   return diffSec;
  // };

  return (
    <HStack>
      <Grid templateColumns="repeat(2, 1fr)">
        {availableOrders.slice(0, 6).map((order) => (
          <GridItem key={v4()}>
            <Button
              w="24vw"
              h="24vh"
              bgColor="gray.100"
              margin={2}
              onClick={() => handleClick(order)}
            >
              {order.woodenNumber}
            </Button>
            {
              //TODO: ここで時間を表示する
              /* <Box>
              {order.orderStateLogs.readiedAt
                ? calculateSec(order) + '秒'
                : 'lording...'}
            </Box> */
            }
          </GridItem>
        ))}
      </Grid>
      <Box>
        <Box>
          <Card h={'44vh'}>
            <CardBody>
              <Box height="25vh">
                <Box>
                  {currentSelectOrder?.woodenNumber
                    ? currentSelectOrder.woodenNumber
                    : 'lording...'}
                </Box>
                {currentSelectOrder?.menus.map((menu) => (
                  <Box key={v4()}>
                    <Box>{menu.name}</Box>
                    <Box>トッピング</Box>
                    {Object.entries(menu.arranges).map(([topping, value]) => {
                      if (!value) {
                        return <Box key={topping}>-no {topping}</Box>;
                      }
                      return null;
                    })}
                  </Box>
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
            ]}
          />
        </Box>
      </Box>
    </HStack>
  );
};

export default DeliveryUI;
