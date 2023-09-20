import {
  useDisclosure,
  IconButton,
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
import { Ticket } from '../../../ui/icon';

function TicketIdInputDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        aria-label="ticket"
        position="fixed"
        bottom="40px"
        right="40px"
        icon={<Ticket />}
        opacity={0.7}
        isRound={true}
        fontSize="300px"
        size={{ base: '100px', sm: '150px' }}
        ref={btnRef.current}
        onClick={onOpen}
      />
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
          <DrawerHeader>前売り券番号を入力してください</DrawerHeader>

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

export default TicketIdInputDrawer;
