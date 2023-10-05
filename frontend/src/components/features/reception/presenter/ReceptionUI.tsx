import {
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  HStack,
  Heading,
  Image,
  Stack,
  VStack,
} from '@chakra-ui/react';
import OrderConfirmationModal from './OrderConfirmationModal';
import TicketIdInputDrawer from './TicketIdInputDrawer';

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
                {/* <VStack align="stretch">
                  <Checkbox defaultChecked>ソース</Checkbox>
                  <Checkbox defaultChecked>マヨネーズ</Checkbox>
                  <Checkbox defaultChecked>かつお節</Checkbox>
                  <Checkbox defaultChecked>青のり</Checkbox>
                </VStack> */}
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
        <OrderConfirmationModal />
      </HStack>
      <TicketIdInputDrawer />
    </Box>
  );
};

export default ReceptionUI;
