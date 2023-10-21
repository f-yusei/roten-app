import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  ModalFooter,
  Box,
  Stack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FC } from 'react';
import { OrderType, mentaiToppings, sauceToppings } from '../../../../types';

export type ToppingInformationModalProps = {
  order: OrderType;
};

const ToppingInformationModal: FC<ToppingInformationModalProps> = ({
  order,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  useEffect(() => {}, []);

  const completeTopping = () => {
    order.orderState = 'available';
    onClose();
  };

  return (
    <>
      <Button
        minW={'sm'}
        minH={'xs'}
        onClick={() => {
          onOpen();
        }}
      >
        <VStack>
          {order.menus.map((menu, index) => (
            <VStack key={index}>
              <Box fontSize={'20px'}>{menu.name}</Box>
              {menu.arranges.map((arrange, arrangeIndex) =>
                arrange === false ? (
                  menu.isSauce === true ? (
                    <div key={arrangeIndex}>
                      - no {sauceToppings[arrangeIndex]}
                    </div>
                  ) : (
                    <div key={arrangeIndex}>
                      -no {mentaiToppings[arrangeIndex]}
                    </div>
                  )
                ) : null,
              )}
            </VStack>
          ))}
        </VStack>
      </Button>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>注文内容</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack justify="center">
              {order.menus.map((menu, index) => (
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Stack direction={'column'} key={index}>
                    <Box fontSize={'20px'}>{menu.name}</Box>

                    {menu.arranges.map((arrange, arrangeIndex) =>
                      arrange === false ? (
                        menu.isSauce === true ? (
                          <div key={arrangeIndex}>
                            - no {sauceToppings[arrangeIndex]}
                          </div>
                        ) : (
                          <div key={arrangeIndex}>
                            -no {mentaiToppings[arrangeIndex]}
                          </div>
                        )
                      ) : null,
                    )}
                  </Stack>
                  <Box fontSize={'40px'}>{menu.price}</Box>
                </Stack>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              戻る
            </Button>
            <Button variant="ghost" onClick={() => completeTopping()}>
              トッピングを完了する
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ToppingInformationModal;
