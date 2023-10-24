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
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/common/rootState.type';

function OrderConfirmationModal({
  difference_money,
  depositAmount,
}: {
  difference_money: number;
  depositAmount: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const cart = useSelector((state: RootState) => state.cart);

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
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <VStack justify="left">
              <h1>注文内容</h1>
              {cart.map((order) => (
                <Box>
                  <h1>{order.name + order.price + '円'}</h1>
                </Box>
              ))}
              <Box>
                <h1>
                  合計金額{' '}
                  {cart.reduce((sum, order) => sum + order.price, 0).toString()}
                  円
                </h1>
                <h1>お預かり {depositAmount}円</h1>
                <h1>お釣り {difference_money}円 </h1>
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
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OrderConfirmationModal;
