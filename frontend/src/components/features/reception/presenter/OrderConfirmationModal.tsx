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
} from '@chakra-ui/react';
import React from 'react';
import { OrderInformationType } from '../../../../types';

const numberOfTicketsUsed = 10;
const depositAmount = 1000;
const totalMoney = 900;

function OrderConfirmationModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

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
          name: 'ソース',
          price: 250,
          arranges: {
            ソース: false,
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
  ]

  const totalItemCount = orders.reduce((total, order) => total + order.menus.length, 0);

  // 特定の商品の個数をカウント
  const specificProducts = ['ソース', 'めんたい']; // カウントしたくない特定の商品名

  const nonSpecificProductCount = orders.reduce((total, order) => {
    const count = order.menus.reduce((itemTotal, menu) => {
      if (!specificProducts.includes(menu.name)) {
        return itemTotal + 1;
      }
      return itemTotal;
    }, 0);

    return total + count;
  }, 0);

  return (
    <>
      <Button
        fontSize="2.4rem"
        mt={1}
        width="39.5vw"
        height="10vh"
        onClick={onOpen}
      >
        確定
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
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
                    <CardHeader fontWeight="bold" fontSize={30} textAlign={"center"} marginTop={10} p={0}>注文番号</CardHeader>
                    <CardBody fontSize={50} textAlign={"center"} m={2} p={2}>26</CardBody>
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
                  {orders.map((order, index) => (
                    <div key={index}>
                      <h2 style={{color:'#7d7d7d'}}>{order.woodenNumber}番テーブルの注文</h2>
                      <ul>
                        {order.menus.map((menu, menuIndex) => (
                          <div key={menuIndex}>
                            <p>
                              ・{menu.name}
                              <span style={{color:'#ffa500'}}>価格: {menu.price}円</span>
                            </p>
                            {Object.entries(menu.arranges).map(([topping, value]) => {
                              if (!value) {
                                return (
                                  <p key={topping} style={{color:'#5f9ea0'}}>
                                    -{topping}なし
                                  </p>
                                );
                              }
                              return null;
                            })}
                          </div>
                        ))}
                        <p style={{ lineHeight: '3' }}>
                          [100円券: {numberOfTicketsUsed}枚]
                        </p>
                      </ul>
                    </div>
                  ))}
                </GridItem>
                <GridItem
                  rowSpan={3}
                  colSpan={2}
                  bg="gray.100"
                  borderRadius={10}
                  m={5}
                >
                  <Card m={5}>
                    <CardHeader fontWeight="bold" fontSize={30} textAlign={"center"} marginTop={10} p={0}>受取番号</CardHeader>
                    <CardBody fontSize={50} textAlign={"center"} m={2} p={2}>-23i</CardBody>
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
                    <p>小計 | {totalItemCount}[点]（{nonSpecificProductCount}）</p>
                    <p>合計 | {totalMoney}円</p>
                    <p>お預かり | {depositAmount}円</p>
                    <p>お釣り | {depositAmount - totalMoney}円</p>
                  </p>
                </GridItem>
              </Grid>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} >
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OrderConfirmationModal;
