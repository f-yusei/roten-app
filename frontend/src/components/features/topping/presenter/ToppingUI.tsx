import { Box, Card, CardBody, HStack, Stack } from '@chakra-ui/react';

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
        </HStack>
      </Stack>
    </div>
  );
};

export default ToppingUI;
