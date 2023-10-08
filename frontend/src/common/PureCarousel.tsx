import { HStack, AspectRatio, Box, Card } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { OrderInformation } from '../types';

export const PureCarousel: FC<{ cardInformation: OrderInformation[] }> = ({
  cardInformation,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const size = 440;
  return (
    <HStack alignItems={'stretch'}>
      <HStack
        bg="gray.100"
        w={16}
        justifyContent="center"
        cursor={'pointer'}
        onClick={() => {
          if (!ref.current) return;
          console.log(ref.current.scrollLeft);
          ref.current.scrollTo({
            left: ref.current.scrollLeft - size,
          });
          // scrollToPosition(currentPosition - 1)
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
        {cardInformation.map((card, i) => {
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
                <Box>{card.orderNumber}</Box>
                <Box>{card.menu}</Box>
                <Box>{card.topping}</Box>
              </Card>
            </AspectRatio>
          );
        })}
      </HStack>
      <HStack
        bg="gray.100"
        w={16}
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
