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
import { FC, useEffect } from 'react';
import PayDrawer from './Payment';
import OrderHistoryDrawer from './OrderHistoryDrawer';
import { MenuInformation } from '../../../../types';
import { v4 } from 'uuid';
import { ArrangeState } from '../../../../state/cart/cartSlice';

type ReceptionUIProps = {
  cart: MenuInformation[];
  handleAddToCart: ({ name, price, arranges, id }: MenuInformation) => void;
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
              order.name === 'ソース（セット）前売り' ? (
                <HStack key={index}>
                  <SetCard
                    order={order}
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
                <Box key={v4()}></Box>
              ) : (
                <Card key={order.id} w={'54vw'} minH={'8vh'} m={2}>
                  <h2>{order.name}</h2>
                  <HStack>
                    <CheckboxGroup>
                      {Object.keys(order.arranges).map((topping, i) => (
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
                cart.reduce((sum, order) => sum + order.price, 0)
              }
            </h2>
            <PayDrawer />
          </HStack>
        </Card>
      </HStack>
    </Box>
  );
};

const SetCard = ({
  order,
  handleUpdateOrderCheck,
}: {
  order: MenuInformation;
  handleUpdateOrderCheck: ({ id, arrange, checked }: ArrangeState) => void;
}) => {
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
                <Card w={'35vw'} minH={'8vh'}>
                  <h2>ソース（セット）前売り</h2>
                  <HStack>
                    <Checkbox
                      defaultChecked={true}
                      colorScheme="green"
                      onChange={(e) => {
                        handleUpdateOrderCheck({
                          id: order.id,
                          arrange: 'ソース',
                          checked: e.target.checked,
                        });
                      }}
                    >
                      ソース
                    </Checkbox>
                    <Checkbox
                      defaultChecked={true}
                      colorScheme="green"
                      onChange={(e) => {
                        handleUpdateOrderCheck({
                          id: order.id,
                          arrange: 'マヨ',
                          checked: e.target.checked,
                        });
                      }}
                    >
                      マヨ
                    </Checkbox>
                    <Checkbox
                      defaultChecked={true}
                      colorScheme="green"
                      onChange={(e) => {
                        handleUpdateOrderCheck({
                          id: order.id,
                          arrange: 'アオサ',
                          checked: e.target.checked,
                        });
                      }}
                    >
                      青のり
                    </Checkbox>
                    <Checkbox
                      defaultChecked={true}
                      colorScheme="green"
                      onChange={(e) => {
                        handleUpdateOrderCheck({
                          id: order.id,
                          arrange: 'カツオ',
                          checked: e.target.checked,
                        });
                      }}
                    >
                      かつお節
                    </Checkbox>
                  </HStack>
                </Card>
              </Stack>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Stack>
                <Card w={'35vw'} minH={'8vh'}>
                  <h2>めんたい（セット）前売り</h2>
                  <HStack>
                    <Checkbox
                      defaultChecked={true}
                      colorScheme="green"
                      onChange={(e) => {
                        handleUpdateOrderCheck({
                          id: order.id,
                          arrange: 'ソース',
                          checked: e.target.checked,
                        });
                      }}
                    >
                      ソース
                    </Checkbox>
                    <Checkbox
                      defaultChecked={true}
                      colorScheme="green"
                      onChange={(e) => {
                        handleUpdateOrderCheck({
                          id: order.id,
                          arrange: 'めんたいマヨ',
                          checked: e.target.checked,
                        });
                      }}
                    >
                      めんたいマヨ
                    </Checkbox>
                    <Checkbox
                      defaultChecked={true}
                      colorScheme="green"
                      onChange={(e) => {
                        handleUpdateOrderCheck({
                          id: order.id,
                          arrange: 'チーズ',
                          checked: e.target.checked,
                        });
                      }}
                    >
                      チーズ
                    </Checkbox>
                    <Checkbox
                      defaultChecked={true}
                      colorScheme="green"
                      onChange={(e) => {
                        handleUpdateOrderCheck({
                          id: order.id,
                          arrange: 'カツオ',
                          checked: e.target.checked,
                        });
                      }}
                    >
                      かつお節
                    </Checkbox>
                  </HStack>
                </Card>
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      ) : null}
    </>
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
