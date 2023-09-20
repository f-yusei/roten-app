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
  Card,
  ModalFooter,
} from '@chakra-ui/react';
import React from 'react';

function OrderConfirmationModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Button size="lg" onClick={onOpen}>
        注文を確定
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>注文内容</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack justify="center">
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
                width={{ base: '100%', sm: 'full' }}
                height={{ base: '100%', sm: '100px' }}
                borderRadius={30}
              ></Card>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
                width={{ base: '100%', sm: 'full' }}
                height={{ base: '100%', sm: '100px' }}
                borderRadius={30}
              ></Card>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
                width={{ base: '100%', sm: 'full' }}
                height={{ base: '100%', sm: '100px' }}
                borderRadius={30}
              ></Card>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
                width={{ base: '100%', sm: 'full' }}
                height={{ base: '100%', sm: '100px' }}
                borderRadius={30}
              ></Card>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              注文をせずに戻る
            </Button>
            <Button variant="ghost">注文を確定する</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OrderConfirmationModal;
