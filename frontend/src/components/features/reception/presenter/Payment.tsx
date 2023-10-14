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
import Calculator from './Calculator';

function PayDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
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
