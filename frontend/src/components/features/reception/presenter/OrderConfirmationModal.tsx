import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Card,
  ModalFooter,
  Box,
  CardHeader,
  CardBody,
  Grid,
  GridItem,
  VStack,
  ModalBody,
} from '@chakra-ui/react';
import React from 'react';
import {
  OrderInformationType,
  OrderInformationTypeForPost,
} from '../../../../types';
import { useSelector } from 'react-redux';
import orderApi from '../../../../api/orderApi';
import { RootState } from '../../../../state/common/rootState.type';
import { v4 } from 'uuid';

function OrderConfirmationModal({
  numberOfTicketsUsed,
  difference_money,
  depositAmount,
}: {
  numberOfTicketsUsed: number;
  difference_money: number;
  depositAmount: number;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [order, setOrder] = React.useState<OrderInformationType>({
    _id: '6533ae6bfb99ad75540d3592',
    woodenNumber: 404,
    orderState: 'waiting',
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
          ソース: true,
          マヨ: true,
          カツオ: true,
          アオサ: true,
        },
      },
      {
        id: v4(),
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
  });

  const calculateChange = () => {
    return depositAmount - difference_money;
  };

  //cartをpostする関数
  const postOrder = async () => {
    const orderForPost: OrderInformationTypeForPost = {
      woodenNumber: 1,
      orderState: 'waiting',
      orderStateLogs: {
        orderReceivedAt: new Date(),
        readiedAt: undefined,
        deliveredAt: undefined,
        invalidAt: undefined,
      },
      menus: cart.map((menu) => ({
        id: menu.id,
        name: menu.name,
        price: menu.price,
        arranges: menu.arranges,
      })),
    };

    const response = await orderApi.storeOrder(orderForPost);
    setOrder(response);
    console.log(response);
  };

  const handleButtonClick = () => {
    postOrder();
    onOpen();
  };

  const totalItemCount = order.menus.length; // 合計の個数

  // 特定の商品の個数をカウント
  const specificProducts = ['ソース', 'めんたい']; // カウントしたくない特定の商品名

  const nonSpecificProductCount = order.menus.reduce((count, menu) => {
    if (specificProducts.includes(menu.name)) {
      return count;
    }
    return count + 1;
  }, 0);

  const cart = useSelector((state: RootState) => state.cart);

  const cart = useSelector((state: RootState) => state.cart);

  return (
    <>
      <Button
        fontSize="2.4rem"
        mt={1}
        width="39.5vw"
        height="10vh"
        onClick={handleButtonClick}
      >
        確定
      </Button>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'4xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <VStack justify="left">
              <h1>注文内容</h1>
              {cart.map((order) => (
                <Box>
                  <h1>{order.name + order.price + '円'}</h1>
                </Box>
              ))}
              <Box>
                <h1>
                  合計金額{' '}
                  {cart.reduce((sum, order) => sum + order.price, 0).toString()}
                  円
                </h1>
                <h1>お預かり {depositAmount}円</h1>
                <h1>お釣り {difference_money}円 </h1>
              </Box>
              <Card>
                <CardHeader>注文番号</CardHeader>
                <CardBody>26</CardBody>
              </Card>
              <Card>
                <CardHeader>受け取り番号</CardHeader>
                <CardBody>10</CardBody>
              </Card>
            </VStack>
            <Box>
              <Grid
                templateRows="repeat(6, 1fr)"
                templateColumns="repeat(5, 1fr)"
              >
                <GridItem
                  rowSpan={3}
                  colSpan={2}
                  bg="gray.100"
                  borderRadius={10}
                  m={5}
                >
                  <Card m={5}>
                    <CardHeader
                      fontWeight="bold"
                      fontSize={30}
                      textAlign={'center'}
                      marginTop={10}
                      p={0}
                    >
                      注文番号
                    </CardHeader>
                    <CardBody fontSize={50} textAlign={'center'} m={2} p={2}>
                      26
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  rowSpan={4}
                  colSpan={3}
                  fontSize={30}
                  bg="gray.100"
                  borderRadius={10}
                  m={5}
                >
                  {/* メニュー情報を表示 */}
                  <div>
                    <h2 style={{ color: '#7d7d7d' }}>
                      木札の番号：{order.woodenNumber}
                    </h2>
                    <ul>
                      {order.menus.map((menu, menuIndex) => (
                        <div key={menuIndex}>
                          <p>
                            ・{menu.name}
                            <span style={{ color: '#ffa500' }}>
                              価格: {menu.price}円
                            </span>
                          </p>
                          {Object.entries(menu.arranges).map(
                            ([topping, value]) => {
                              if (!value) {
                                return (
                                  <p key={topping} style={{ color: '#5f9ea0' }}>
                                    -{topping}なし
                                  </p>
                                );
                              }
                              return null;
                            },
                          )}
                        </div>
                      ))}
                      <p style={{ lineHeight: '3' }}>
                        [100円券: {numberOfTicketsUsed}枚]
                      </p>
                    </ul>
                  </div>
                </GridItem>
                <GridItem
                  rowSpan={3}
                  colSpan={2}
                  bg="gray.100"
                  borderRadius={10}
                  m={5}
                >
                  <Card m={5}>
                    <CardHeader
                      fontWeight="bold"
                      fontSize={30}
                      textAlign={'center'}
                      marginTop={10}
                      p={0}
                    >
                      受取番号
                    </CardHeader>
                    <CardBody fontSize={50} textAlign={'center'} m={2} p={2}>
                      -23i
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  rowSpan={4}
                  colSpan={3}
                  fontSize={30}
                  bg="gray.100"
                  borderRadius={10}
                  m={5}
                >
                  <p>
                    <p>
                      小計 | {totalItemCount}[点]（{nonSpecificProductCount}）
                    </p>
                    <p>合計 | {difference_money}円</p>
                    <p>お預かり | {depositAmount}円</p>
                    <p>お釣り | {calculateChange()}円</p>
                  </p>
                </GridItem>
              </Grid>
            </Box>
=======
            <VStack justify="left">
              <h1>注文内容</h1>
              {cart.map((order) => (
                <Box>
                  <h1>{order.name + order.price + '円'}</h1>
                </Box>
              ))}
              <Box>
                <h1>
                  合計金額{' '}
                  {cart.reduce((sum, order) => sum + order.price, 0).toString()}
                  円
                </h1>
                <h1>お預かり {depositAmount}円</h1>
                <h1>お釣り {difference_money}円 </h1>
              </Box>
              <Card>
                <CardHeader>注文番号</CardHeader>
                <CardBody>26</CardBody>
              </Card>
              <Card>
                <CardHeader>受け取り番号</CardHeader>
                <CardBody>10</CardBody>
              </Card>
            </VStack>
>>>>>>> baeb3ca ("feat: 受け取り、受け渡しの金額をグローバルにあるcartから取ってくる")
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OrderConfirmationModal;
