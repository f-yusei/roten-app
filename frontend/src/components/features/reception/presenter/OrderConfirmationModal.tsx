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

function OrderConfirmationModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Button size="lg" onClick={onOpen}>
        確定
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
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OrderConfirmationModal;
