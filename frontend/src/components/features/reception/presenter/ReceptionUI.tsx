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
import { GridItem } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import PayDrawer from './Payment';
import OrderHistoryDrawer from './OrderHistoryDrawer';
import { MenuInformationForReception } from '../../../../types';
import { v4 } from 'uuid';
import { ArrangeState } from '../../../../state/cart/cartSlice';

type ReceptionUIProps = {
  cart: MenuInformationForReception[];
  handleAddToCart: ({
    id,
    setId,
    menuInfo,
  }: MenuInformationForReception) => void;
  handleDeleteFromCart: (id: string) => void;
  handleUpdateOrderCheck: ({ id, arrange, checked }: ArrangeState) => void;
  handleDeleteSetMenu: (index: number) => void;
};

const ReceptionUI: FC<ReceptionUIProps> = ({
  cart,
  handleAddToCart,
  handleDeleteFromCart,
  handleUpdateOrderCheck,
  handleDeleteSetMenu,
}) => {
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Box maxHeight="100vh">
      <HStack>
        <OrderButton handleAddToCart={handleAddToCart} />
        <Card w={'60vw'} h={'96vh'} p={4} m={2}>
          <h1>注文内容</h1>
          <Stack bgColor={'gray.50'} h={'88vh'} overflow={'scroll'}>
            {cart.map((order, index) =>
              order.menuInfo.name === 'ソース（セット）前売り' ? (
                <Card key={order.id} w={'52vw'} minH={'12vh'} m={2} p={2}>
                  <HStack key={order.id}>
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
                    <VStack spacing={2} alignItems={'start'}>
                      {cart
                        .filter((pareOrder) => pareOrder.setId === order.setId)
                        .map((filteredOrder) => (
                          <div key={filteredOrder.id}>
                            <h2>{filteredOrder.menuInfo.name}</h2>
                            <HStack>
                              <CheckboxGroup>
                                {Object.keys(filteredOrder.menuInfo.arranges)
                                  .slice(1, 5)
                                  .map((topping, i) => (
                                    <Checkbox
                                      key={i}
                                      defaultChecked={true}
                                      colorScheme="green"
                                      onChange={(e) => {
                                        handleUpdateOrderCheck({
                                          id: filteredOrder.id,
                                          arrange: topping,
                                          checked: e.target.checked,
                                        });
                                      }}
                                    >
                                      {topping}
                                    </Checkbox>
                                  ))}
                              </CheckboxGroup>
                            </HStack>
                          </div>
                        ))}
                    </VStack>
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
                </Card>
              ) : order.menuInfo.name === 'めんたい（セット）前売り' ? (
                <Box key={v4()}></Box>
              ) : (
                <Card key={order.id} w={'52vw'} minH={'12vh'} m={2} p={2}>
                  <h2>{order.menuInfo.name}</h2>
                  <HStack>
                    <CheckboxGroup>
                      {Object.keys(order.menuInfo.arranges)
                        .slice(1, 5)
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
                            {topping}
                          </Checkbox>
                        ))}
                    </CheckboxGroup>
                    <Button
                      onClick={() => {
                        handleDeleteFromCart(order.id);
                      }}
                    >
                      削除
                    </Button>
                  </HStack>
                </Card>
              ),
            )}
          </Stack>
          <HStack>
            <h2>合計</h2>
            <h2>
              {
                //注文の合計金額を表示
                cart.reduce((sum, order) => sum + order.menuInfo.price, 0)
              }
            </h2>
            <PayDrawer />
          </HStack>
        </Card>
      </HStack>
    </Box>
  );
};

type orderButtonProps = {
  handleAddToCart: ({ id, menuInfo }: MenuInformationForReception) => void;
};

const OrderButton: FC<orderButtonProps> = ({ handleAddToCart }) => {
  const [setId, setSetId] = useState(v4());

  return (
    <VStack>
      <OrderHistoryDrawer />
      <HStack>
        <Button
          fontSize={{ base: '50px', sm: '24px' }}
          h={{ base: '100px', sm: '200px' }}
          w={{ base: '100px', sm: '200px' }}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
              id: v4(),
              menuInfo: {
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
            })
          }
        >
          ソース
        </Button>
        <Button
          fontSize={{ base: '50px', sm: '24px' }}
          h={{ base: '100px', sm: '200px' }}
          w={{ base: '100px', sm: '200px' }}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
              id: v4(),
              menuInfo: {
                name: 'ソース前売り',
                price: 0,
                arranges: {
                  kind: 'sauce',
                  sauce: true,
                  mayo: true,
                  aosa: true,
                  katsuo: true,
                },
              },
            })
          }
        >
          ソース前売り券
        </Button>
      </HStack>
      <HStack>
        <Button
          fontSize={{ base: '50px', sm: '24px' }}
          h={{ base: '100px', sm: '200px' }}
          w={{ base: '100px', sm: '200px' }}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
              id: v4(),
              menuInfo: {
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
            })
          }
        >
          メンタイ
        </Button>
        <Button
          fontSize={{ base: '50px', sm: '24px' }}
          h={{ base: '100px', sm: '200px' }}
          w={{ base: '100px', sm: '200px' }}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
              id: v4(),
              menuInfo: {
                name: 'めんたい前売り',
                price: 0,
                arranges: {
                  kind: 'mentai',
                  sauce: true,
                  mentaiMayo: true,
                  cheese: true,
                  katsuo: true,
                },
              },
            })
          }
        >
          メンタイ前売り券
        </Button>
      </HStack>
      <Button
        fontSize={{ base: '50px', sm: '24px' }}
        h={{ base: '100px', sm: '200px' }}
        w={{ base: '100px', sm: '400px' }}
        p={4}
        m={2}
        mb={4}
        onClick={() => {
          setSetId(v4());
          handleAddToCart({
            id: v4(),
            setId: setId,
            menuInfo: {
              name: 'ソース（セット）前売り',
              price: 0,
              arranges: {
                kind: 'sauce',
                sauce: true,
                mayo: true,
                aosa: true,
                katsuo: true,
              },
            },
          });

          handleAddToCart({
            id: v4(),
            setId: setId,
            menuInfo: {
              name: 'めんたい（セット）前売り',
              price: 0,
              arranges: {
                kind: 'mentai',
                sauce: true,
                mentaiMayo: true,
                cheese: true,
                katsuo: true,
              },
            },
          });
        }}
      >
        セット
      </Button>
    </VStack>
  );
};

type orderButtonProps = {
  handleAddToCart: ({ name, price, arranges, id }: MenuInformation) => void;
};

const OrderButton: FC<orderButtonProps> = ({ handleAddToCart }) => {
  return (
    <VStack>
      <OrderHistoryDrawer />
      <HStack>
        <Button
          fontSize={{ base: '50px', sm: '24px' }}
          h={{ base: '100px', sm: '200px' }}
          w={{ base: '100px', sm: '200px' }}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
              id: v4(),
              name: 'ソース',
              price: 250,
              arranges: {
                ソース: true,
                マヨ: true,
                アオサ: true,
                カツオ: true,
              },
            })
          }
        >
          ソース
        </Button>
        <Button
          fontSize={{ base: '50px', sm: '24px' }}
          h={{ base: '100px', sm: '200px' }}
          w={{ base: '100px', sm: '200px' }}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
              id: v4(),
              name: 'ソース前売り',
              price: 0,
              arranges: {
                ソース: true,
                マヨ: true,
                アオサ: true,
                カツオ: true,
              },
            })
          }
        >
          ソース前売り券
        </Button>
      </HStack>
      <HStack>
        <Button
          fontSize={{ base: '50px', sm: '24px' }}
          h={{ base: '100px', sm: '200px' }}
          w={{ base: '100px', sm: '200px' }}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
              id: v4(),
              name: 'めんたい',
              price: 300,
              arranges: {
                ソース: true,
                めんたいマヨ: true,
                チーズ: true,
                カツオ: true,
              },
            })
          }
        >
          メンタイ
        </Button>
        <Button
          fontSize={{ base: '50px', sm: '24px' }}
          h={{ base: '100px', sm: '200px' }}
          w={{ base: '100px', sm: '200px' }}
          p={4}
          m={4}
          onClick={() =>
            handleAddToCart({
              id: v4(),
              name: 'めんたい前売り',
              price: 0,
              arranges: {
                ソース: true,
                めんたいマヨ: true,
                チーズ: true,
                カツオ: true,
              },
            })
          }
        >
          メンタイ前売り券
        </Button>
      </HStack>
      <Button
        fontSize={{ base: '50px', sm: '24px' }}
        h={{ base: '100px', sm: '200px' }}
        w={{ base: '100px', sm: '400px' }}
        p={4}
        m={2}
        mb={4}
        onClick={() => {
          handleAddToCart({
            id: v4(),
            name: 'ソース（セット）前売り',
            price: 0,
            arranges: {
              ソース: true,
              マヨ: true,
              アオサ: true,
              カツオ: true,
            },
          });
          handleAddToCart({
            id: v4(),
            name: 'めんたい（セット）前売り',
            price: 0,
            arranges: {
              ソース: true,
              めんたいマヨ: true,
              チーズ: true,
              カツオ: true,
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
