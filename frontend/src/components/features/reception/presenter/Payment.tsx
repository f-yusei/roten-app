import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/common/rootState.type';
import Calculator from './Calculator';


function PayDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const cart = useSelector((state: RootState) => state.cart).cart;

  // console.log("cart : ", cart.length);

  return (
    <>
      {cart.length === 0 ? (
        <Button
        fontSize="24px"
        size={{ base: '100px', sm: '150px' }}
        m={2}
        p={8}
        ref={btnRef.current}
        bg={"gray.200"}
        disabled  
        >
        注文がありません
        </Button>
      ): (
        <Button
        fontSize="24px"
        size={{ base: '100px', sm: '150px' }}
        m={2}
        p={8}
        ref={btnRef.current}
        onClick={onOpen}

        >
        会計
        </Button>
      )}

      <Drawer
        size="lg"
        isOpen={isOpen}
        placement={'left'}
        onClose={onClose}
        finalFocusRef={btnRef.current}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Calculator />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PayDrawer;
