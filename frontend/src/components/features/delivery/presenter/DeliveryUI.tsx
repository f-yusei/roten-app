import { Box, Card, CardBody, Grid, GridItem, HStack } from '@chakra-ui/react';
import { PureCarousel } from '../../../../common/PureCarousel';

const DeliveryUI = () => {
  return (
    <HStack>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem w={'20vw'} h={'16vh'} m={4} p={4} bgColor={'gray.100'}>
          <Box>12</Box>
          <h3>0:00</h3>
        </GridItem>
        <GridItem w={'20vw'} h={'16vh'} m={4} p={4} bgColor={'gray.100'}>
          <Box>13</Box>
          <h3>2:00</h3>
        </GridItem>
        <GridItem w={'20vw'} h={'16vh'} m={4} p={4} bgColor={'gray.100'}>
          <Box>14</Box>
          <h3>0:10</h3>
        </GridItem>
        <GridItem w={'20vw'} h={'16vh'} m={4} p={4} bgColor={'gray.100'}>
          <Box>15</Box>
          <h3>0:50</h3>
        </GridItem>
        <GridItem w={'20vw'} h={'16vh'} m={4} p={4} bgColor={'gray.100'}>
          <Box>15</Box>
          <h3>0:50</h3>
        </GridItem>
        <GridItem w={'20vw'} h={'16vh'} m={4} p={4} bgColor={'gray.100'}>
          <Box>15</Box>
          <h3>0:50</h3>
        </GridItem>
      </Grid>
      <Box>
        <Box>
          <Card h={'44vh'}>
            <CardBody>
              <Box>注文番号</Box>
              <Box>メニュー</Box>
              <Box>トッピング</Box>
            </CardBody>
          </Card>
        </Box>
        <Box h={'44vh'}>
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
            ]}
          />
        </Box>
      </Box>
    </HStack>
  );
};

export default DeliveryUI;
