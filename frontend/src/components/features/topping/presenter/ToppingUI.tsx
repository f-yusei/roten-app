import { Box, Card, CardBody, HStack, Stack } from '@chakra-ui/react';
import { PureCarousel } from '../../../../common/PureCarousel';

const ToppingUI = () => {
  return (
    <div>
      <Stack>
        <HStack>
          <Card minW={'sm'} minH={'xs'}>
            <CardBody>
              <h1>ソース</h1>
              <h1>メンタイ</h1>
            </CardBody>
          </Card>
          <Card minW={'sm'} minH={'xs'}>
            <CardBody>
              <h1>2 ソース</h1>
              <h1>3 メンタイ</h1>
            </CardBody>
          </Card>
          <Card minW={'sm'} minH={'xs'}>
            <CardBody>
              <h1>4 ソース</h1>
              <h1>1 メンタイ</h1>
            </CardBody>
          </Card>
        </HStack>
        <Box border="1px" borderColor={'gray.300'} />
        <HStack>
          <Card minW={'sm'} minH={'xs'}>
            <CardBody>
              <h1>ソース</h1>
              <h1>メンタイ</h1>
            </CardBody>
          </Card>
          <Card minW={'sm'} minH={'xs'}>
            <CardBody>
              <h1>ソース</h1>
              <h1>メンタイ</h1>
            </CardBody>
          </Card>
          <PureCarousel
            cardInformation={[
              {
                orderNumber: 1,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 2,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 3,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 4,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 5,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 6,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 7,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 8,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 9,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 10,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 11,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 12,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 13,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 14,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 15,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 16,
                menu: 'ソース',
                topping: 'メンタイ',
              },
              {
                orderNumber: 17,
                menu: 'ソース',
                topping: 'メンタイ',
              },
            ]}
          />
        </HStack>
      </Stack>
    </div>
  );
};

export default ToppingUI;
