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

export type CalculatorProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  calculatorArgs: {
    difference_money: number;
    depositAmount: string;
    numberOfTicketsUsed: number;
    totalMoney: string;
    useTicket: () => void;
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleClear: () => void;
    handleBackspace: () => void;
    calculatorButtonLabels: string[];
  };
};

const calculatorButtonStyle = {
  fontSize: '2.4rem',
  width: '12vw',
  height: '10vh',
  m: 1,
};

const Calculator = ({ setIsOpen, calculatorArgs }: CalculatorProps) => {


  const {
    difference_money,
    depositAmount,
    numberOfTicketsUsed,
    totalMoney,
    useTicket,
    handleClick,
    handleClear,
    handleBackspace,
    calculatorButtonLabels,
  } = calculatorArgs;

  return (
    <Box w={'5vw'}>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <CalculatorDisplay
          difference_money={difference_money}
          depositAmount={parseInt(depositAmount)}
          numberOfTicketsUsed={numberOfTicketsUsed}
          totalMoney={parseInt(totalMoney)}
        />
        <InputButtons
          useTicket={useTicket}
          handleClick={handleClick}
          handleClear={handleClear}
          handleBackspace={handleBackspace}
          calculatorButtonLabels={calculatorButtonLabels}
        />
      </Grid>
      <ConfirmButton
        setIsOpen={setIsOpen}
        numberOfTicketsUsed={numberOfTicketsUsed}
        difference_money={difference_money}
        depositAmount={depositAmount}
      />
    </Box>
  );
};

const InputButtons = ({
  useTicket,
  handleClick,
  handleClear,
  handleBackspace,
  calculatorButtonLabels,
}: {
  useTicket: () => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleClear: () => void;
  handleBackspace: () => void;
  calculatorButtonLabels: string[];
}) => {
  return(
    <>
    <GridItem colSpan={2}>
          <ComplimentaryTicketButton useTicket={useTicket} />
        </GridItem>
        <GridItem colSpan={1}>
          <IconButton
            {...calculatorButtonStyle}
            aria-label="Backspace"
            icon={<BackspaceIcon />}
            onClick={handleBackspace}
          />
        </GridItem>
        {calculatorButtonLabels.map((label) => (
          <CalculatorButton value={label} onClick={handleClick} />
        ))}
        <GridItem colSpan={1}>
          <Button
            onClick={handleClear}
            {...calculatorButtonStyle}
          >
            Clear
          </Button>
        </GridItem>
        </>
  )
}

const ConfirmButton = ({
  setIsOpen,
  numberOfTicketsUsed,
  difference_money,
  depositAmount,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  numberOfTicketsUsed: number;
  difference_money: number;
  depositAmount: string;
}) => {
  return (
    <Grid>
        <GridItem colSpan={1}>
          <OrderConfirmationModal
            numberOfTicketsUsed={numberOfTicketsUsed}
            difference_money={difference_money}
            depositAmount={parseInt(depositAmount)}
            setIsOpen={setIsOpen}
          />
        </GridItem>
      </Grid>
  )
}


const ComplimentaryTicketButton = ({
  useTicket,
}: {
  useTicket: () => void;
}) => {
  return (
    <Button
            onClick={useTicket}
            fontSize="2.4rem"
            width="26vw"
            height="10vh"
            mr={1}
          >
            100円券
          </Button>

  )
}

const CalculatorDisplay = ({
  difference_money,
  depositAmount,
  numberOfTicketsUsed,
  totalMoney,
}: {
  difference_money: number;
  depositAmount: number;
  numberOfTicketsUsed: number;
  totalMoney: number;
}) => {
  return (
    <>
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
          />
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
          />
        </GridItem>
        </>
  )
};

type CalculatorButtonProps = {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const CalculatorButton = ({ value, onClick }:CalculatorButtonProps) => {
  return (
    <GridItem colSpan={1}>
          <Button
            name={value}
            onClick={onClick}
            {...calculatorButtonStyle}
            alignItems="center"
          >
            {value}
          </Button>
        </GridItem>
  )
};

export default Calculator;
