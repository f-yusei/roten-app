import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  VStack,
  Card,
  ModalFooter,
  Box,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FC } from 'react';

export type OrderConfirmationModalProps = {
  order: {
    menus: string[];
    orderState: 'waiting' | 'available' | 'finished';
  };
};

const OrderConfirmationModal: FC<OrderConfirmationModalProps> = ({ order }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  useEffect(() => {
    console.log(isOpen);
    console.log(order);
  }, [isOpen]);

  const completeTopping = () => {
    order.orderState = 'available';
    onClose();
  };

  return (
    <>
      <Button minW={'sm'} minH={'xs'} onClick={onOpen}>
        <VStack>
          {order.menus.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </VStack>
      </Button>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <VStack justify="center">
              <h1>注文内容</h1>
              <Box>
                <h1>ソース 250円</h1>
                <h1>メンタイ 300円</h1>
                <h1>ソース（前）0円</h1>
              </Box>
              <Box>
                <h1>合計 550円</h1>
                <h1>お預かり 900円</h1>
                <h1>お釣り 350円</h1>
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
export default OrderConfirmationModal;
