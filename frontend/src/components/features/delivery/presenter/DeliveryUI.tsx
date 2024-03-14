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
import { v4 } from 'uuid';
import { OrderInformationType } from '../../../../types';

const DeliveryUI = ({
  availableOrders,
  currentSelectOrder,
  handleClick,
  discardOrder,
  finishOrderDelivery,
}: {
  availableOrders: OrderInformationType[];
  currentSelectOrder: OrderInformationType | null;
  handleClick: (order: OrderInformationType) => void;
  discardOrder: () => void;
  finishOrderDelivery: () => void;
}) => {
  
  return (
    <HStack>
      <OrderCards availableOrders={availableOrders} handleClick={handleClick} />
      <Box>
        <ShowCurrentSelectOrder
          currentSelectOrder={currentSelectOrder}
          discardOrder={discardOrder}
          finishOrderDelivery={finishOrderDelivery}
        />
        <ShowOrderHistory/>
      </Box>
    </HStack>
  );
};


const OrderCards = ({
  availableOrders,
  handleClick,
}: {
  availableOrders: OrderInformationType[];
  handleClick: (order: OrderInformationType) => void;
}) => {
  return (
    <Box
        w="53vw"
        h="98vh"
        bgColor={'gray.20'}
        border="2px"
        borderRadius="10px"
      >
        <Grid templateColumns="repeat(2, 1fr)">
          {availableOrders.slice(0, 6).map((order) => (
            <GridItem key={v4()}>
              <Button
                w="24vw"
                h="24vh"
                bgColor="gray.100"
                margin={2}
                fontSize={120}
                fontWeight={'bold'}
                border="2px"
                borderColor={'#bfbfbf'}
                onClick={() => handleClick(order)}
              >
                {order.woodenNumber}
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Box>
  )
}

const ShowCurrentSelectOrder = ({
  currentSelectOrder,
  discardOrder,
  finishOrderDelivery,
}: {
  currentSelectOrder: OrderInformationType | null;
  discardOrder: () => void;
  finishOrderDelivery: () => void;
}) => {
  return (
    <Box>
          <Card h={'44vh'} border="2px">
            <CardBody>
              <Box height="25vh">
                <Box
                  w="5vw"
                  bgColor={'#ffeb99'}
                  textAlign={'center'}
                  ml={'auto'}
                  p={1}
                  fontSize={15}
                  fontWeight={'bold'}
                  border="2px"
                  borderRadius="10px"
                  borderColor={'#fdd630'}
                >
                  {currentSelectOrder?.woodenNumber
                    ? currentSelectOrder.woodenNumber
                    : 'lording...'}
                </Box>
                <Box
                  m={'auto'}
                  p={3}
                  w="20vw"
                  h="24vh"
                  bgColor={'gray.100'}
                  overflow={'scroll'}
                  borderRadius="10px"
                  border="2px"
                  borderColor={'#bfbfbf'}
                >
                  {currentSelectOrder?.menus.map((menu) => (
                    <Box key={v4()}>
                      {menu.name == 'ソース' ||
                      menu.name == 'ソース前売り' ||
                      menu.name == 'ソース（セット）前売り' ? (
                        <Box
                          fontSize={20}
                          color={'#8c5403'}
                          fontWeight={'bold'}
                        >
                          {menu.name}
                        </Box>
                      ) : (
                        <Box
                          fontSize={20}
                          color={'#ffb3d9'}
                          fontWeight={'bold'}
                        >
                          {menu.name}
                        </Box>
                      )}

                      {Object.entries(menu.arranges).map(([topping, value]) => {
                        if (!value) {
                          return <Box key={topping}>-no {topping}</Box>;
                        }
                        return null;
                      })}
                    </Box>
                  ))}
                </Box>
              </Box>
              <div className="oprButton">
                <HStack spacing="50px">
                  <Button
                    onClick={discardOrder}
                    height="8vh"
                    width="14vw"
                    fontWeight={'bold'}
                    mt={12}
                    fontSize={30}
                    bgColor="red.500"
                  >
                    廃棄
                  </Button>
                  <Button
                    onClick={finishOrderDelivery}
                    height="8vh"
                    width="19vw"
                    mt={12}
                    bgColor="green.300"
                    fontSize={30}
                    fontWeight={'bold'}
                  >
                    受け渡し
                  </Button>
                </HStack>
              </div>
            </CardBody>
          </Card>
        </Box>
  )
}

const ShowOrderHistory = () => {
  return (
    <Box h={'55vh'} border="2px" borderRadius="10px">
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
              },
            ]}
            size={440}
          />
        </Box>
  )
}

export default DeliveryUI;
