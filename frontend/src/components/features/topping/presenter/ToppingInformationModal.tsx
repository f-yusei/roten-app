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
} from '@chakra-ui/react';
import React from 'react';
import { FC } from 'react';
import { OrderInformationType } from '../../../../types';
import orderApi from '../../../../api/orderApi';

export type ToppingInformationModalProps = {
  order: OrderInformationType;
};

const ToppingInformationModal: FC<ToppingInformationModalProps> = ({
  order,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const completeTopping = async () => {
    const newOrder: OrderInformationType = {
      ...order,
      orderState: 'available',
    };
    try {
      const res = await orderApi.updateOrder(newOrder);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
              {menu.arranges.kind === 'sauce' ? (
                <>
                  <Box>{menu.arranges.sauce ? '' : 'ソース: なし'}</Box>
                  <Box>{menu.arranges.mayo ? '' : 'マヨ: なし'}</Box>
                  <Box>{menu.arranges.katsuo ? '' : 'カツオ:なし'}</Box>
                  <Box> {menu.arranges.aosa ? '' : 'アオサ:なし'}</Box>
                </>
              ) : (
                <>
                  <Box> {menu.arranges.sauce ? '' : 'ソース:なし'}</Box>
                  <Box>
                    {menu.arranges.mentaiMayo ? '' : 'めんたいマヨ:なし'}
                  </Box>
                  <Box>{menu.arranges.katsuo ? '' : 'カツオ:なし'}</Box>
                  <Box>{menu.arranges.cheese ? '' : 'チーズ:なし'}</Box>
                </>
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
                <VStack key={index}>
                  <Box fontSize={'20px'}>{menu.name}</Box>
                  {menu.arranges.kind === 'sauce' ? (
                    <>
                      <Box>{menu.arranges.sauce ? '' : 'ソース: なし'}</Box>
                      <Box>{menu.arranges.mayo ? '' : 'マヨ: なし'}</Box>
                      <Box>{menu.arranges.katsuo ? '' : 'カツオ:なし'}</Box>
                      <Box> {menu.arranges.aosa ? '' : 'アオサ:なし'}</Box>
                    </>
                  ) : (
                    <>
                      <Box> {menu.arranges.sauce ? '' : 'ソース:なし'}</Box>
                      <Box>
                        {menu.arranges.mentaiMayo ? '' : 'めんたいマヨ:なし'}
                      </Box>
                      <Box>{menu.arranges.katsuo ? '' : 'カツオ:なし'}</Box>
                      <Box>{menu.arranges.cheese ? '' : 'チーズ:なし'}</Box>
                    </>
                  )}
                </VStack>
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
