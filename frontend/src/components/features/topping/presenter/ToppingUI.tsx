import { Box, Grid, GridItem } from '@chakra-ui/react';
import { PureCarousel } from '../../../../common/PureCarousel';
import ToppingInformationModal from './ToppingInformationModal';
import { OrderInformationType } from '../../../../types';
import { useRef } from 'react';

type ToppingUIProps = {
  updateOrderState: (order: OrderInformationType) => void;
  setAllOrders: (orders: OrderInformationType[]) => void;
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  waitingOrders: OrderInformationType[];
  historyOrders: OrderInformationType[];
};

const ToppingUI = ({ updateOrderState, onOpen,onClose,isOpen, waitingOrders,historyOrders }: ToppingUIProps) => {
  const finalRef = useRef(null);
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" m={4} gap={4}>
        {waitingOrders ? (
          waitingOrders.slice(0, 5).map((order) => (
            <GridItem key={order._id}>
              <ToppingInformationModal
                order={order}
                updateOrderState={updateOrderState}
                onOpen={onOpen}
                onClose={onClose}
                isOpen={isOpen}
                finalRef={finalRef}
              />
            </GridItem>
          ))
        ) : (
          <Box>お疲れ様でした。ちょっと休憩...</Box>
        )}
        <GridItem key={5}>
          <PureCarousel cardInformation={historyOrders} size={320} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default ToppingUI;
