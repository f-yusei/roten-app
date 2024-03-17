import {
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
import { FC } from 'react';
import { OrderInformationType,MenuInformation} from '../../../../types';
import orderApi from '../../../../api/orderApi';

export type ToppingInformationModalProps = {
  order: OrderInformationType;
  updateOrderState: (order: OrderInformationType) => void;
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  finalRef: React.MutableRefObject<null>;
};

const ToppingInformationModal: FC<ToppingInformationModalProps> = ({
  order,
  updateOrderState,
  onOpen,
  onClose,
  isOpen,
  finalRef,
}) => {
  
  const completeTopping = async () => {
    const newOrder: OrderInformationType = {
      ...order,
      orderState: 'available',
    };
    try {
      const res = await orderApi.updateOrder(newOrder);
      updateOrderState(newOrder);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    onClose();
  };

  return (
    <>
    <ToppingInformationButton 
    order={order}
    onOpen={onOpen}
    />
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
                  <MenuArrangesBox menu={menu}/>
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

type ToppingInformationButtonProps = {
  order: OrderInformationType;
  onOpen: () => void;
};

const ToppingInformationButton: FC<ToppingInformationButtonProps> = ({
  order,
  onOpen,
  }) => {
  return (
<Button
        minW={'sm'}
        minH={'xs'}
        overflow={'auto'}
        onClick={() => {
          onOpen();
        }}
        padding={0}
      >
        <VStack>
          <Box fontSize={'20px'}>木札番号：{order.woodenNumber}</Box>
          {order.menus.map((menu, index) => (
            <VStack key={index}>
              <Box
                fontSize={'20px'}
                color={menu.arranges.kind === 'sauce' ? '#631A03' : '#F59090'}
              >
                {menu.name}
              </Box>
              <MenuArrangesBox menu={menu}/>
            </VStack>
          ))}
        </VStack>
      </Button>
  );
}

const MenuArrangesBox = ({
  menu
}:{
  menu:MenuInformation
}) => {
return (
  <>
  {menu.arranges.kind === 'sauce' ? (
    <>
      <Box>{menu.arranges.sauce ? '' : 'ソース: なし'}</Box>
      <Box>{menu.arranges.mayo ? '' : 'マヨ: なし'}</Box>
      <Box>{menu.arranges.katsuo ? '' : 'カツオ:なし'}</Box>
      <Box>{menu.arranges.aosa ? '' : 'アオサ:なし'}</Box>
    </>
  ) : (
    <>
      <Box>{menu.arranges.sauce ? '' : 'ソース:なし'}</Box>
      <Box>
        {menu.arranges.mentaiMayo ? '' : 'めんたいマヨ:なし'}
      </Box>
      <Box>{menu.arranges.katsuo ? '' : 'カツオ:なし'}</Box>
      <Box>{menu.arranges.cheese ? '' : 'チーズ:なし'}</Box>
    </>
  )}
  </>
);
}