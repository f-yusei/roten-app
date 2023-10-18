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
import React, { useEffect } from 'react';
import { FC } from 'react';

export type ToppingInformationModalProps = {
  order: {
    menus: string[];
    orderState: 'waiting' | 'available' | 'finished';
  };
};

const ToppingInformationModal: FC<ToppingInformationModalProps> = ({
  order,
}) => {
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
