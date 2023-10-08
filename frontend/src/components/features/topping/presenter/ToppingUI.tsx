import { Card, CardBody, Grid, GridItem } from '@chakra-ui/react';
import { PureCarousel } from '../../../../common/PureCarousel';

const ToppingUI = () => {
  const receptions = [
    ['ソース', 'メンタイ'],
    ['２ソース', '３メンタイ'],
    ['４ソース', '1メンタイ'],
    ['ソース', 'メンタイ'],
    ['ソース', 'メンタイ'],
    ['ソース', 'メンタイ'],
    ['ソース', 'メンタイ'],
    ['ソース', 'メンタイ'],
    ['ソース', 'メンタイ'],
  ];
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {receptions.slice(0, 5).map((reception, index) => (
          <GridItem key={index}>
            <Card minW={'sm'} minH={'xs'}>
              <CardBody>
                {reception.map((item, itemIndex) => (
                  <div key={itemIndex}>{item}</div>
                ))}
              </CardBody>
            </Card>
          </GridItem>
        ))}
        <GridItem key={5}>
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
        </GridItem>
      </Grid>
    </div>
  );
};

export default ToppingUI;
