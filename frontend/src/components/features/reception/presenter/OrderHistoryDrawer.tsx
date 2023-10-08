import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';

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
        注文履歴
      </Button>
      <Drawer
        size="lg"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef.current}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>注文番号で履歴を検索</DrawerHeader>

          <DrawerBody>
            <Input placeholder="入力して..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button colorScheme="blue">検索</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PayDrawer;
