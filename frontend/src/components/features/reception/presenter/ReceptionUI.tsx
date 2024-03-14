import {
  Box,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  HStack,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import PayDrawer from './Payment';
import OrderHistoryDrawer from './OrderHistoryDrawer';
import { MenuInformation } from '../../../../types';
import { v4 } from 'uuid';
import { ArrangeState } from '../../../../state/cart/cartSlice';
import { translateWords } from '../../../../common/transWord';
import { mentaiTopping, sauceTopping } from './variable';

const ReceptionUI = ({
  cart,
  handleAddToCart,
  handleDeleteFromCart,
  handleUpdateOrderCheck,
  handleDeleteSetMenu,
  difference_money,
  depositAmount,
  numberOfTicketsUsed,
  totalMoney,
  useTicket,
  handleClick,
  handleClear,
  handleBackspace,
  calculatorButtonLabels,
}: {
  cart: MenuInformation[];
  handleAddToCart: ({ name, price, arranges, id }: MenuInformation) => void;
  handleDeleteFromCart: (id: string) => void;
  handleUpdateOrderCheck: ({ id, arrange, checked }: ArrangeState) => void;
  handleDeleteSetMenu: (index: number) => void;
difference_money: number;
    depositAmount: string;
    numberOfTicketsUsed: number;
    totalMoney: string;
    useTicket: () => void;
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleClear: () => void;
    handleBackspace: () => void;
    calculatorButtonLabels: string[];
}) => {

  const calculatorArgs = {
    difference_money,
    depositAmount,
    numberOfTicketsUsed,
    totalMoney,
    useTicket,
    handleClick,
    handleClear,
    handleBackspace,
    calculatorButtonLabels,
  };
  
  return (
    <Box maxHeight="100vh">
      <HStack>
        <OrderButton handleAddToCart={handleAddToCart} />
        <ShowCart
          cart={cart}
          handleDeleteFromCart={handleDeleteFromCart}
          handleUpdateOrderCheck={handleUpdateOrderCheck}
          handleDeleteSetMenu={handleDeleteSetMenu}
          translateWords={translateWords}
          calculatorArgs={calculatorArgs}
        />
      </HStack>
    </Box>
  );
};

const ShowCart = ({
  cart,
  handleDeleteFromCart,
  handleUpdateOrderCheck,
  handleDeleteSetMenu,
  translateWords,
  calculatorArgs,
}: {
  cart: MenuInformation[],
  handleDeleteFromCart: (id: string) => void,
  handleUpdateOrderCheck: ({ id, arrange, checked }: ArrangeState) => void,
  handleDeleteSetMenu: (index: number) => void,
  translateWords: (words: string) => string
  calculatorArgs: {
    difference_money: number;
    depositAmount: string;
    numberOfTicketsUsed: number;
    totalMoney: string;
    useTicket: () => void;
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleClear: () => void;
    handleBackspace: () => void;
    calculatorButtonLabels: string[];
  };
}) => {
  return (
    <Card w={'60vw'} h={'96vh'} p={4} m={2}>
      <h1>注文内容</h1>
      <Stack bgColor={'gray.50'} h={'88vh'} overflow={'scroll'}>
        {cart.map((order, index) =>
          order.name === 'ソース（セット）前売り' ? (
            <HStack key={order.id}>
              <SetCardInCart
                order={order}
                cart={cart}
                handleUpdateOrderCheck={handleUpdateOrderCheck}
              />

              <Button
                w="12vw"
                h="20vh"
                borderRadius={10}
                m={5}
                onClick={() => {
                  handleDeleteSetMenu(index);
                }}
              >
                削除
              </Button>
            </HStack>
          ) : order.name === 'めんたい（セット）前売り' ? (
            <Box key={order.id}></Box>
          ) : (
            <HStack key={order.id}>
              <Box width={'40vw'}>
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  gap={4}
                  marginLeft={5}
                >
                  <GridItem
                    colSpan={1}
                    h="10vh"
                    w="4vw"
                    bg="blue.400"
                    borderRadius={10}
                    color={'white'}
                    p={'1.4vw'}
                  >
                    単品
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Card key={order.id} w={'35vw'} minH={'8vh'} mt={2}>
                      <h2>{order.name}</h2>
                      <HStack>
                        <CheckboxGroup>
                          {Object.keys(order.arranges)
                            .slice(1)
                            .map((topping, i) => (
                              <Checkbox
                                key={i}
                                defaultChecked={true}
                                colorScheme="green"
                                onChange={(e) => {
                                  handleUpdateOrderCheck({
                                    id: order.id,
                                    arrange: topping,
                                    checked: e.target.checked,
                                  });
                                }}
                              >
                                {translateWords(topping)}
                              </Checkbox>
                            ))}
                        </CheckboxGroup>
                      </HStack>
                    </Card>
                  </GridItem>
                </Grid>
              </Box>
              <Button
                w="12vw"
                h="10vh"
                m={5}
                borderRadius={10}
                onClick={() => {
                  handleDeleteFromCart(order.id);
                }}
              >
                削除
              </Button>
            </HStack>
          ),
        )}
      </Stack>
      <HStack>
        <ShowTotalPrice cart={cart} />
        <PayDrawer calculatorArgs={calculatorArgs} />
      </HStack>
    </Card>
  )
}




const ShowTotalPrice = ({ cart }: { cart: MenuInformation[] }) => {
  const totalPrice = cart.reduce((sum, order) => {
    return sum + order.price;
  }, 0);

  return (
    <Box>
      <h2>合計金額</h2>
      <h2>{totalPrice}円</h2>
    </Box>
  );
}



const SetCardInCart = ({
  order,
  cart,
  handleUpdateOrderCheck,
}: {
  order: MenuInformation;
  cart: MenuInformation[];
  handleUpdateOrderCheck: ({ id, arrange, checked }: ArrangeState) => void;
}) => {
  const nextIndex = cart.findIndex((element) => element.id === order.id) + 1;

  return (
    <>
      {order.name === 'ソース（セット）前売り' ? (
        <Box width={'40vw'}>
          <Grid
            templateRows="repeat(2, 1rf)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
            marginLeft={5}
          >
            <GridItem
              colSpan={1}
              rowSpan={2}
              h="20vh"
              w="4vw"
              bg="red.400"
              borderRadius={10}
              color={'white'}
              p={'1.4vw'}
            >
              セット
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Stack>
                <OrderCardInCart 
                  toppings={sauceTopping}
                  order={order}
                  handleUpdateOrderCheck={handleUpdateOrderCheck}
                />
              </Stack>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Stack>
                <OrderCardInCart 
                  toppings={mentaiTopping}
                  order={cart[nextIndex]}
                  handleUpdateOrderCheck={handleUpdateOrderCheck}
                />
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      ) : null}
    </>
  );
};

const OrderCardInCart = ({
  toppings,
  order,
  handleUpdateOrderCheck,
}: {
  toppings: string[];
  order: MenuInformation;
  handleUpdateOrderCheck: ({ id, arrange, checked }: ArrangeState) => void;  
}) => {
  return (
    <Card w={'35vw'} minH={'8vh'}>
                  <h2>{order.name}</h2>
                  <HStack>
                    {toppings.map((topping, i) => (
                      <ToppingCheckbox
                        key={i}
                        order={order}
                        handleUpdateOrderCheck={handleUpdateOrderCheck}
                        arrange={topping}
                      />
                    ))}
                  </HStack>
                </Card>
  )
}





const ToppingCheckbox = ({
  order,
  handleUpdateOrderCheck,
  arrange,
}: {
  order: MenuInformation;
  handleUpdateOrderCheck: ({ id, arrange, checked }: ArrangeState) => void;
  arrange: string;
}) => {
  return (
    <Checkbox
      defaultChecked={true}
      colorScheme="green"
      onChange={(e) => {
        handleUpdateOrderCheck({
          id: order.id,
          arrange: arrange,
          checked: e.target.checked,
        });
      }}
    >
      {translateWords(arrange)}
    </Checkbox>
  );
}

type orderButtonProps = {
  handleAddToCart: ({ name, price, arranges, id }: MenuInformation) => void;
};

const OrderButton: FC<orderButtonProps> = ({ handleAddToCart }) => {
  return (
    <VStack>
      <OrderHistoryDrawer />
      <HStack>
        <Button
          fontSize={"1.6rem"}
          h={'20vh'}
          w={'12vw'}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
              id: v4(),
              name: 'ソース',
              price: 250,
              arranges: {
                kind: 'sauce',
                sauce: true,
                mayo: true,
                katsuo: true,
                aosa: true,
              },
            })
          }
        >
          ソース
        </Button>
        <Button
          fontSize={"1.6rem"}
          h={'20vh'}
          w={'12vw'}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
              id: v4(),
              name: 'ソース前売り',
              price: 0,
              arranges: {
                kind: 'sauce',
                sauce: true,
                mayo: true,
                katsuo: true,
                aosa: true,
              },
            })
          }
        >
          ソース前売り券
        </Button>
      </HStack>
      <HStack>
        <Button
          fontSize={"1.6rem"}
          h={'20vh'}
          w={'12vw'}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
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
            })
          }
        >
          メンタイ
        </Button>
        <Button
          fontSize={"1.6rem"}
          h={'20vh'}
          w={'12vw'}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
              id: v4(),
              name: 'めんたい前売り',
              price: 0,
              arranges: {
                kind: 'mentai',
                sauce: true,
                mentaiMayo: true,
                cheese: true,
                katsuo: true,
              },
            })
          }
        >
          メンタイ前売り券
        </Button>
      </HStack>
      <Button
        fontSize={"1.6rem"}
        h={'20vh'}
        w={'24vw'}
        p={4}
        m={2}
        mb={4}
        onClick={() => {
          handleAddToCart({
            id: v4(),
            name: 'ソース（セット）前売り',
            price: 0,
            arranges: {
              kind: 'sauce',
              sauce: true,
              mayo: true,
              aosa: true,
              katsuo: true,
            },
          });
          handleAddToCart({
            id: v4(),
            name: 'めんたい（セット）前売り',
            price: 0,
            arranges: {
              kind: 'mentai',
              sauce: true,
              mentaiMayo: true,
              cheese: true,
              katsuo: true,
            },
          });
        }}
      >
        セット
      </Button>
    </VStack>
  );
};

export default ReceptionUI;
