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
import PayDrawer from './OrderHistoryDrawer';
import { useState } from 'react';
import { v4 } from 'uuid';

type Order = {
  id: string;
  name: string;
  toppings: Topping;
  isSet: boolean;
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

const ReceptionUI = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.checked;
    const name = target.name;
    console.log(name, value);
  };
  return (
    <Box maxHeight="100vh">
      <HStack>
        <VStack>
          <PayDrawer />
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
                    isSet: false,
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
                    isSet: false,
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
                    isSet: false,
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
                    isSet: false,
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
            onClick={() => {
              setOrders([
                ...orders,
                {
                  id: v4(),
                  name: 'セット',
                  toppings: {
                    ソース: true,
                    メンタイ: true,
                    チーズ: true,
                    かつお節: true,
                  },
                  isSet: true,
                  price: 500,
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
            {orders.map((order) =>
              //オーダーネームがセットの場合は<SetCard />を表示。それ以外は<Card />を表示
              order.isSet ? (
                <SetCard />
              ) : (
                <Card w={'54vw'} minH={'8vh'} m={2}>
                  <h2>{order.name}</h2>
                  <HStack>
                    <CheckboxGroup>
                      {Object.keys(order.toppings).map((topping) => (
                        <Checkbox
                          colorScheme="green"
                          value={topping}
                          onChange={handleChange}
                          key={topping}
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
            <Button
              fontSize={{ base: '50px', sm: '24px' }}
              h={'12vh'}
              w={{ base: '100px', sm: '200px' }}
              p={4}
              m={4}
            >
              お会計
            </Button>
          </HStack>
        </Card>
      </HStack>
    </Box>
  );
};

const SetCard = () => {
  return (
    <HStack>
      <Box h="16vh" w="2vw" bg="red.400" borderRadius={6}>
        セット
      </Box>
      <Stack>
        <Card w={'52vw'} minH={'8vh'} m={2}>
          <h2>ソース</h2>
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
        <Card w={'52vw'} minH={'8vh'} m={2}>
          <h2>メンタイ</h2>
          <HStack>
            <Checkbox defaultChecked colorScheme="green">
              ソース
            </Checkbox>
            <Checkbox defaultChecked colorScheme="green">
              メンタイ
            </Checkbox>
            <Checkbox defaultChecked colorScheme="green">
              チーズ
            </Checkbox>
            <Checkbox defaultChecked colorScheme="green">
              かつお節
            </Checkbox>
          </HStack>
        </Card>
      </Stack>
    </HStack>
  );
};

export default ReceptionUI;
