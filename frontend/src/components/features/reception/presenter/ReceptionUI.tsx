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
import { useState } from 'react';
import { v4 } from 'uuid';

type Order = {
  id: string;
  name: string;
  toppings: Topping;
  price: number;
};

type Topping = {
  ソース?: boolean;
  マヨ?: boolean;
  青のり?: boolean;
  かつお節?: boolean;
  メンタイ?: boolean;
  チーズ?: boolean;
};
import PayDrawer from './Payment';
import OrderHistoryDrawer from './OrderHistoryDrawer';

const ReceptionUI = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  return (
    <Box maxHeight="100vh">
      <HStack>
        <VStack>
          <OrderHistoryDrawer />
          <HStack>
            <Button
              fontSize={{ base: '50px', sm: '24px' }}
              h={{ base: '100px', sm: '200px' }}
              w={{ base: '100px', sm: '200px' }}
              p={4}
              m={4}
              onClick={() => {
                setOrders([
                  ...orders,
                  {
                    id: v4(),
                    name: 'ソース',
                    toppings: {
                      ソース: true,
                      マヨ: true,
                      青のり: true,
                      かつお節: true,
                    },
                    price: 250,
                  },
                ]);
              }}
            >
              ソース
            </Button>
            <Button
              fontSize={{ base: '50px', sm: '24px' }}
              h={{ base: '100px', sm: '200px' }}
              w={{ base: '100px', sm: '200px' }}
              p={4}
              m={4}
              onClick={() => {
                setOrders([
                  ...orders,
                  {
                    id: v4(),
                    name: 'ソース前売り券',
                    toppings: {
                      ソース: true,
                      マヨ: true,
                      青のり: true,
                      かつお節: true,
                    },
                    price: 0,
                  },
                ]);
              }}
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
              onClick={() => {
                setOrders([
                  ...orders,
                  {
                    id: v4(),
                    name: 'メンタイ',
                    toppings: {
                      ソース: true,
                      メンタイ: true,
                      チーズ: true,
                      かつお節: true,
                    },
                    price: 300,
                  },
                ]);
              }}
            >
              メンタイ
            </Button>
            <Button
              fontSize={{ base: '50px', sm: '24px' }}
              h={{ base: '100px', sm: '200px' }}
              w={{ base: '100px', sm: '200px' }}
              p={4}
              m={4}
              onClick={() => {
                setOrders([
                  ...orders,
                  {
                    id: v4(),
                    name: 'メンタイ前売り券',
                    toppings: {
                      ソース: true,
                      メンタイ: true,
                      チーズ: true,
                      かつお節: true,
                    },
                    price: 0,
                  },
                ]);
              }}
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
              setOrders([
                ...orders,
                {
                  id: v4(),
                  name: 'セット前売り券',
                  toppings: {
                    ソース: true,
                    マヨ: true,
                    青のり: true,
                    かつお節: true,
                  },
                  price: 0,
                },
              ]);
            }}
          >
            セット
          </Button>
        </VStack>
        <Card w={'60vw'} h={'96vh'} p={4} m={2}>
          <h1>注文内容</h1>
          <Stack bgColor={'gray.50'} h={'88vh'} overflow={'scroll'}>
            {orders.map((order, index) =>
              order.name === 'セット前売り券' ? (
                <HStack key={index}>
                  <SetCard menuName={order.name} />

                  <Button
                    w="12vw"
                    h="20vh"
                    borderRadius={10}
                    m={5}
                    onClick={() => {
                      setOrders(orders.filter((o) => o.id !== order.id));
                    }}
                  >
                    削除
                  </Button>
                </HStack>
              ) : (
                <Card w={'54vw'} minH={'8vh'} m={2}>
                  <h2>{order.name}</h2>
                  <HStack>
                    <CheckboxGroup>
                      {Object.keys(order.toppings).map((topping, i) => (
                        <Checkbox
                          colorScheme="green"
                          onChange={(e) =>
                            setOrders(
                              orders.map((o) =>
                                o.id === order.id
                                  ? {
                                      ...o,
                                      toppings: {
                                        ...o.toppings,
                                        [topping]: e.target.checked,
                                      },
                                    }
                                  : o,
                              ),
                            )
                          }
                          key={i}
                          defaultChecked
                        >
                          {topping}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                    <Button
                      onClick={() => {
                        setOrders(orders.filter((o) => o.id !== order.id));
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
                orders.reduce((sum, order) => sum + order.price, 0)
              }
            </h2>
            <PayDrawer />
          </HStack>
        </Card>
      </HStack>
    </Box>
  );
};

const SetCard = ({ menuName }: { menuName: string }) => {
  return (
    <>
      {menuName === 'セット前売り券' ? (
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
                    <Checkbox defaultChecked colorScheme="green">
                      ソース
                    </Checkbox>
                    <Checkbox defaultChecked colorScheme="green">
                      マヨ
                    </Checkbox>
                    <Checkbox defaultChecked colorScheme="green">
                      青のり
                    </Checkbox>
                    <Checkbox defaultChecked colorScheme="green">
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
                    <Checkbox defaultChecked colorScheme="green">
                      ソース
                    </Checkbox>
                    <Checkbox defaultChecked colorScheme="green">
                      マヨ
                    </Checkbox>
                    <Checkbox defaultChecked colorScheme="green">
                      青のり
                    </Checkbox>
                    <Checkbox defaultChecked colorScheme="green">
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

export default ReceptionUI;
