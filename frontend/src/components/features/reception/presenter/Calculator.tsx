import { Box, Button, IconButton, Input } from '@chakra-ui/react';
import { BackspaceIcon } from '../../../../common/BackspaceIcon';
import React from 'react';
import OrderConfirmationModal from './OrderConfirmationModal';

const Calculator = () => {
  const [value, setValue] = React.useState('');
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const currentValue = e.currentTarget.name;
    setValue(value + currentValue);
  };
  const handleClear = () => {
    setValue('');
  };
  const handleBackspace = () => {
    setValue(value.slice(0, -1));
  };

  //百円券を使用する関数
  const useTicket = () => {
    if (parseInt(value, 10) < 100) {
      setValue('');
      return;
    } else if (value === '') {
      setValue('');
      return;
    }
    setValue((parseInt(value, 10) - 100).toString());
  };

  return (
    <Box>
      <Input isDisabled value={value} />
      <Box>
        <Button onClick={useTicket}>100円券</Button>
        <Button onClick={handleClear}>Clear</Button>
        <IconButton
          aria-label="Backspace"
          icon={<BackspaceIcon />}
          onClick={handleBackspace}
        ></IconButton>
        <Button name="7" onClick={handleClick}>
          7
        </Button>
        <Button name="8" onClick={handleClick}>
          8
        </Button>
        <Button name="9" onClick={handleClick}>
          9
        </Button>
        <Button name="4" onClick={handleClick}>
          4
        </Button>
        <Button name="5" onClick={handleClick}>
          5
        </Button>
        <Button name="6" onClick={handleClick}>
          6
        </Button>
        <Button name="1" onClick={handleClick}>
          1
        </Button>
        <Button name="2" onClick={handleClick}>
          2
        </Button>
        <Button name="3" onClick={handleClick}>
          3
        </Button>
        <OrderConfirmationModal />
      </Box>
    </Box>
  );
};

export default Calculator;
