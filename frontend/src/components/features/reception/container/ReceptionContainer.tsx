import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../../../../state/common/rootState.type';
import ReceptionUI from '../presenter/ReceptionUI';
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

  const [numberOfTicketsUsed, setNumberOfTicketsUsed] = React.useState(0);
  const [depositAmount, setDepositAmount] = React.useState('0');

  const calculatorButtonLabels = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00'];

  const totalMoney = cart.cart
    .reduce((sum, order) => sum + order.price, 0)
    .toString();

  let difference_money = 0;

  if (numberOfTicketsUsed * 100 > parseInt(totalMoney)) {
    difference_money = 0;
  } else {
    difference_money = parseInt(totalMoney) - numberOfTicketsUsed * 100;
  }
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const currentValue = e.currentTarget.name;
    if (parseInt(depositAmount) == 0) {
      setDepositAmount(currentValue);
    } else {
      setDepositAmount(depositAmount + currentValue);
    }
  };
  const handleClear = () => {
    setDepositAmount('0');
    setNumberOfTicketsUsed(0);
  };
  const handleBackspace = () => {
    setDepositAmount(depositAmount.slice(0, -1));
  };

  //百円券を使用する関数
  const useTicket = () => {
    if (difference_money <= 0) {
      return;
    }
    setNumberOfTicketsUsed(numberOfTicketsUsed + 1);
  };

  const calculatorArgs = {
    difference_money: difference_money,
    depositAmount: depositAmount,
    numberOfTicketsUsed: numberOfTicketsUsed,
    totalMoney: totalMoney,
    useTicket: useTicket,
    handleClick: handleClick,
    handleClear: handleClear,
    handleBackspace: handleBackspace,
    calculatorButtonLabels: calculatorButtonLabels,
  };
    

  const args = {
    cart: cart.cart,
    handleAddToCart: handleAddToCart,
    handleDeleteFromCart: handleDeleteFromCart,
    handleUpdateOrderCheck: handleUpdateOrderCheck,
    handleDeleteSetMenu: handleDeleteSetMenu,
  };
  return <ReceptionUI 
    {...args}
    {...calculatorArgs}
  />;
};

export default ReceptionContainer;
