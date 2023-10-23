import { useSelector } from 'react-redux';
import ReceptionUI from '../presenter/ReceptionUI';
import { RootState } from '../../../../state/common/rootState.type';

const ReceptionContainer = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const args = {
    cart: cart,
  };
  return <ReceptionUI {...args} />;
};

export default ReceptionContainer;
