import {
  Box,
  Button,
  Grid,
  GridItem,
  IconButton,
  Textarea,
} from '@chakra-ui/react';
import { BackspaceIcon } from '../../../../common/BackspaceIcon';
import React from 'react';
import OrderConfirmationModal from './OrderConfirmationModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/common/rootState.type';

const Calculator = () => {
  const [numberOfTicketsUsed, setNumberOfTicketsUsed] = React.useState(0);
  const [depositAmount, setDepositAmount] = React.useState('0');

  const cart = useSelector((state: RootState) => state.cart).cart;

  const totalMoney = cart
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

  return (
    <Box w={'5vw'}>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Textarea
            value={
              '差　　額:' +
              difference_money +
              '円' +
              '\n預かり金:' +
              depositAmount +
              '円'
            }
            fontSize="2rem"
            width="26vw"
            height="20vh"
            disabled={true}
          ></Textarea>
        </GridItem>
        <GridItem colSpan={1}>
          <Textarea
            value={
              '100円券:' +
              numberOfTicketsUsed +
              '枚' +
              '\n\n合計金額\n' +
              totalMoney +
              '円'
            }
            fontSize="1.1rem"
            width="12vw"
            height="20vh"
            disabled={true}
          ></Textarea>
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            onClick={useTicket}
            fontSize="2.4rem"
            width="26vw"
            height="10vh"
            mr={1}
          >
            100円券
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <IconButton
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
            aria-label="Backspace"
            icon={<BackspaceIcon />}
            onClick={handleBackspace}
          ></IconButton>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            name="1"
            onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            alignItems="center"
            m={1}
          >
            1
          </Button>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Button
            name="2"
            onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            alignItems="center"
            m={1}
          >
            2
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            name="3"
            onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            alignItems="center"
            m={1}
          >
            3
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            name="4"
            onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            4
          </Button>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Button
            name="5"
            onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            5
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            name="6"
            onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            6
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            name="7"
            onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            7
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            name="8"
            onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            8
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            name="9"
            onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            9
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            name="0"
            onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            0
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            name="00"
            onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            00
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            onClick={handleClear}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            Clear
          </Button>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem colSpan={1}>
          <OrderConfirmationModal
            numberOfTicketsUsed={numberOfTicketsUsed}
            difference_money={difference_money}
            depositAmount={parseInt(depositAmount)}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Calculator;
