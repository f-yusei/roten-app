import { useSelector } from 'react-redux';
import ReceptionUI from '../presenter/ReceptionUI';
import { RootState } from '../../../../state/common/rootState.type';
import { useDispatch } from 'react-redux';
import { MenuInformation } from '../../../../types';
import {
  ArrangeState,
  addMenu,
  removeMenu,
  removeMenuByIndex,
  updateCheckBox,
} from '../../../../state/cart/cartSlice';

const ReceptionContainer = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const handleAddToCart = ({ name, price, arranges, id }: MenuInformation) => {
    const newMenu = {
      id,
      name,
      price,
      arranges,
    };
    dispatch(addMenu(newMenu));
  };

  const handleDeleteFromCart = (id: string) => {
    dispatch(removeMenu(id));
  };

  const handleUpdateOrderCheck = ({ id, arrange, checked }: ArrangeState) => {
    dispatch(
      updateCheckBox({
        id,
        arrange,
        checked,
      }),
    );
  };
  //ここで２回消しているのは、セット商品の場合、配列の中に二つ並んで入っているため
  const handleDeleteSetMenu = (index: number) => {
    dispatch(removeMenuByIndex(index));
    dispatch(removeMenuByIndex(index));
  };

  const args = {
    cart: cart.cart,
    handleAddToCart: handleAddToCart,
    handleDeleteFromCart: handleDeleteFromCart,
    handleUpdateOrderCheck: handleUpdateOrderCheck,
    handleDeleteSetMenu: handleDeleteSetMenu,
  };
  return <ReceptionUI {...args} />;
};

export default ReceptionContainer;
