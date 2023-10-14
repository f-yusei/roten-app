import { Box, Button, Card, HStack, Stack, VStack } from '@chakra-ui/react';
import PayDrawer from './Payment';

const ReceptionUI = () => {
  return (
    <Box maxHeight="100vh">
      <HStack>
        <VStack>
          <PayDrawer />
          <HStack>
            <Button
              fontSize={{ base: '50px', sm: '24px' }}
              h={{ base: '100px', sm: '200px' }}
              w={{ base: '100px', sm: '200px' }}
              p={4}
              m={4}
            >
              ソース
            </Button>
            <Button
              fontSize={{ base: '50px', sm: '24px' }}
              h={{ base: '100px', sm: '200px' }}
              w={{ base: '100px', sm: '200px' }}
              p={4}
              m={4}
            >
              ソース前売り券
            </Button>
          </HStack>
          <HStack>
            <Button
              fontSize={{ base: '50px', sm: '24px' }}
              h={{ base: '100px', sm: '200px' }}
              w={{ base: '100px', sm: '200px' }}
              p={4}
              m={4}
            >
              メンタイ
            </Button>
            <Button
              fontSize={{ base: '50px', sm: '24px' }}
              h={{ base: '100px', sm: '200px' }}
              w={{ base: '100px', sm: '200px' }}
              p={4}
              m={4}
            >
              メンタイ前売り券
            </Button>
          </HStack>
          <Button
            fontSize={{ base: '50px', sm: '24px' }}
            h={{ base: '100px', sm: '200px' }}
            w={{ base: '100px', sm: '400px' }}
            p={4}
            m={2}
          >
            セット
          </Button>
        </VStack>
        <Card w={'60vw'} h={'96vh'} p={4} m={2}>
          <h1>注文内容</h1>
          <Stack bgColor={'gray.50'} h={'88vh'} overflow={'scroll'}>
            {/* TODO:注文の個数が増えても１つ１つの注文カードの高さが自動変更されないようにする */}
            <Card w={{ base: '100vw', sm: '52vw' }} minH={'100px'} m={2}>
              <h2>ソース</h2>
            </Card>
            <Card w={{ base: '100vw', sm: '52vw' }} minH={'100px'} m={2}>
              <h2>ソース</h2>
            </Card>
            <Card w={{ base: '100vw', sm: '52vw' }} minH={'100px'} m={2}>
              <h2>ソース</h2>
            </Card>
            <Card w={{ base: '100vw', sm: '52vw' }} minH={'100px'} m={2}>
              <h2>ソース</h2>
            </Card>
            <Card w={{ base: '100vw', sm: '52vw' }} minH={'100px'} m={2}>
              <h2>ソース</h2>
            </Card>
            <Card w={{ base: '100vw', sm: '52vw' }} minH={'100px'} m={2}>
              <h2>ソース</h2>
            </Card>
          </Stack>
          <HStack>
            <h2>合計</h2>
            <h2>550円</h2>
            <Button
              fontSize={{ base: '50px', sm: '24px' }}
              h={'12vh'}
              w={{ base: '100px', sm: '200px' }}
              p={4}
              m={4}
            >
              お会計
            </Button>
            <PayDrawer />
          </HStack>
        </Card>
      </HStack>
    </Box>
  );
};

export default ReceptionUI;
