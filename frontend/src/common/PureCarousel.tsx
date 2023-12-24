import { HStack, AspectRatio, Box, Card } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { OrderInformationType } from '../types';
import { v4 } from 'uuid';

export const PureCarousel: FC<{ cardInformation: OrderInformationType[], size: number }> = ({
  cardInformation,
  size,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <HStack alignItems={'stretch'}>
      <HStack
        bg="gray.100"
        w={8}
        justifyContent="center"
        cursor={'pointer'}
        onClick={() => {
          if (!ref.current) return;
          console.log(ref.current.scrollLeft);
          ref.current.scrollTo({
            left: ref.current.scrollLeft - size,
          });
        }}
      >
        <Box>◀️</Box>
      </HStack>
      <HStack
        scrollBehavior={'smooth'}
        overflowX="scroll"
        ref={ref}
        w={size}
        sx={{
          scrollSnapType: 'x mandatory',
        }}
      >
        {cardInformation.map((order, i) => {
          return (
            <AspectRatio
              ratio={1}
              minW={size}
              sx={{
                scrollSnapAlign: 'center',
                scrollSnapStop: 'always',
              }}
            >
              <Card key={i}>
                <Box>{"オーダーID:"+order._id}</Box>
                <Box>{"木札番号:"+ order.woodenNumber}</Box>
                {order.menus.map((menu) => (
                  <Box key={v4()}>
                    <Box>{menu.name}</Box>
                    {Object.entries(menu.arranges).map(([topping, value]) => {
                      if (!value) {
                        return <Box key={topping}>-no {topping}</Box>;
                      }
                      return null;
                    })}
                  </Box>
                ))}
              </Card>
            </AspectRatio>
          );
        })}
      </HStack>
      <HStack
        bg="gray.100"
        w={8}
        justifyContent="center"
        cursor={'pointer'}
        onClick={() => {
          if (!ref.current) return;
          ref.current.scrollTo({
            left: ref.current.scrollLeft + size,
          });
        }}
      >
        <Box>▶️</Box>
      </HStack>
    </HStack>
  );
};
