import {
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Ticket } from '../../../ui/icon';
import { useRef } from 'react';
import React from 'react';

const ReceptionUI = () => {
  return (
    <Box maxHeight="100vh">
      <HStack>
        <div>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            maxWidth={{ base: '100%', sm: '650px' }}
            maxHeight={{ base: '100%', sm: '290px' }}
            borderRadius={30}
            m={{ base: '5', sm: '10' }}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '280px' }}
              src="https://img.cpcdn.com/blog_blog_image_photo/371042/650s/22b199a206aa139a12df219cf8cf79ac"
              alt="Cafe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="lg">ソース＆マヨ</Heading>
                <VStack align="stretch">
                  <Checkbox defaultChecked>ソース</Checkbox>
                  <Checkbox defaultChecked>マヨネーズ</Checkbox>
                  <Checkbox defaultChecked>かつお節</Checkbox>
                  <Checkbox defaultChecked>青のり</Checkbox>
                </VStack>
                <Button>カートに追加</Button>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            maxWidth={{ base: '100%', sm: '650px' }}
            maxHeight={{ base: '100%', sm: '290px' }}
            borderRadius={30}
            m={{ base: '5', sm: '10' }}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '280px' }}
              src="https://takoyaki-okina.com/cms/wp-content/uploads/2020/03/takoyaki-mentao-1.jpg"
              alt="Cafe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="lg">チーズ明太</Heading>
                <VStack align="stretch">
                  <Checkbox defaultChecked>明太</Checkbox>
                  <Checkbox defaultChecked>チーズ</Checkbox>
                  <Checkbox defaultChecked>のり</Checkbox>
                </VStack>
                <Button>カートに追加</Button>
              </CardBody>
            </Stack>
          </Card>
        </div>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          width={{ base: '100%', sm: '750px' }}
          height={{ base: '100%', sm: '500px' }}
          borderRadius={30}
          m={{ base: '5', sm: '10' }}
        >
          <CardBody>
            <Heading size="lg">注文内容</Heading>
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
          </CardBody>
        </Card>
      </HStack>
      <HStack justify="center" mb="10">
        <ReturnFocus />
      </HStack>
      <DrawerExample />
    </Box>
  );
};

function DrawerExample() {
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

function ReturnFocus() {
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

export default ReceptionUI;
