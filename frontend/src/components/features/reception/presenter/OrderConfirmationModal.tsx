import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
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
import {
  OrderInformationType,
  OrderInformationTypeForPost,
} from '../../../../types';
import { useDispatch, useSelector } from 'react-redux';
import orderApi from '../../../../api/orderApi';
import { RootState } from '../../../../state/common/rootState.type';
import { v4 } from 'uuid';
import { useGetAllOrder } from '../../../../api/hooks';
import { clearCart } from '../../../../state/cart/cartSlice';

var gotWoodenNum:number;
function OrderConfirmationModal({
  numberOfTicketsUsed,
  difference_money,
  depositAmount,
}: {
  numberOfTicketsUsed: number;
  difference_money: number;
  depositAmount: number;
}) {
  const { orders } = useGetAllOrder();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const cart = useSelector((state: RootState) => state.cart).cart;
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
          kind: 'sauce',
          sauce: true,
          mayo: true,
          aosa: true,
          katsuo: true,
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
  });
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getNumberOfUnusedWoodenTag = () => {

    if (!orders){
      console.log("89");
      return 1;
    } 
    const waitingOrAvailableOrders = orders.filter(
      (order) =>
        order.orderState === 'waiting' || order.orderState === 'available',
    );
    const usedWoodenNumbers = waitingOrAvailableOrders.map(
      (order) => order.woodenNumber,
    );
    const allWoodenNumbers = Array.from(
      { length: 20 },
      (_, index) => index + 1,
    );
    const unusedWoodenNumbers = allWoodenNumbers.filter(
      (woodenNumber) => !usedWoodenNumbers.includes(woodenNumber),
    );
    
    console.log("unu", unusedWoodenNumbers[0])
    return unusedWoodenNumbers[0];
  };

  const calculateChange = () => {
    return depositAmount - difference_money;
  };

  //cartをpostする関数
  const postOrder = async (woodenNumber:number) => {
    const orderForPost: OrderInformationTypeForPost = {
      woodenNumber: woodenNumber,
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

    const responseData = await orderApi.storeOrder(orderForPost);
    setOrder(responseData);
    console.log("response:", responseData);
  };

  
  const handleButtonClick = async () => {
    gotWoodenNum = getNumberOfUnusedWoodenTag();
    console.log("gWN", gotWoodenNum);
    await postOrder(gotWoodenNum);
    onOpen();
    
  };


  const reloadPage = () => {
    window.location.reload();
  };

  const handleModalClose = () => {
    handleClearCart();
    onClose();
    reloadPage();

  };

  const totalItemCount = cart.length; // 合計の個数

  // 特定の商品の個数をカウント
  const specificProducts = ['ソース', 'めんたい']; // カウントしたくない特定の商品名

  // console.log("order in 154", order.menus)
  const nonSpecificProductCount = order.menus.reduce((count, menu) => {
    if (specificProducts.includes(menu.name)) {
      return count;
    }
    return count + 1;
  }, 0);

  return (
    <>
      {calculateChange() >= 0 ? (
        <Button
        fontSize="2.4rem"
        mt={1}
        width="39.5vw"
        height="10vh"
        onClick={handleButtonClick}
      >
        確定
      </Button>
      ):null}
      
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'6xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box>
              <Grid
                templateRows="repeat(6, 1fr)"
                templateColumns="repeat(7, 1fr)"
              >
                <GridItem
                  className="menuInfo"
                  rowSpan={6}
                  colSpan={4}
                  fontSize={30}
                  fontWeight={"medium"}
                  bg="gray.100"
                  borderRadius={10}
                  m={5}
                  p={5}
                >
                  {/* メニュー情報を表示 */}
                  <Box>
                    <ul>
                      {order.menus.map((menu, menuIndex) => (
                        <div key={menuIndex}>
                          <p>
                            ・{menu.name}
                            <span style={{ color: '#ffa500' }}>
                              &emsp; 価格: {menu.price}円
                            </span>
                          </p>
                        </div>
                      ))}
                      <p style={{ lineHeight: '3' }}>
                        内 [100円券: {numberOfTicketsUsed}枚]
                      </p>
                    </ul>
                  </Box>
                </GridItem>
                <GridItem
                  rowSpan={3}
                  colSpan={3}
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
                      {gotWoodenNum}
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
                  p={5}
                >
                  <Box>
                    <p>
                      &emsp;小計&emsp;&ensp;|&ensp; {totalItemCount}[点]（{nonSpecificProductCount}）
                    </p>
                    <p>&emsp;合計&emsp;&ensp;|&ensp; {difference_money}円</p>
                    <p>お預かり&ensp;|&ensp; {depositAmount}円</p>
                    <p>&ensp;お釣り&emsp;|&ensp; {calculateChange()}円</p>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModalClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default OrderConfirmationModal;
