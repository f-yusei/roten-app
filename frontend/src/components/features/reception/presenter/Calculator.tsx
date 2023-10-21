import { Box, Button, Grid, GridItem, IconButton, Input } from '@chakra-ui/react';
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
    <Box w={"5vw"}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem colSpan={3}>
          <Input isDisabled value={value}
            fontSize="2.4rem"
            width="39.5vw"
            height="20vh"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Button onClick={useTicket}
            fontSize="2.4rem"
            width="26vw"
            height="10vh"
            mr={1}
          >
            100円券
          </Button>
        </GridItem>
        <GridItem colSpan={1} >
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
          <Button name="1" onClick={handleClick}
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
          <Button name="2" onClick={handleClick}
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
          <Button name="3" onClick={handleClick}
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
          <Button name="4" onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            4
          </Button>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Button name="5" onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            5
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button name="6" onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            6
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button name="7" onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            7
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button name="8" onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            8
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button name="9" onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            9
          </Button>
        </GridItem >
        <GridItem colSpan={1}>
          <Button name="0" onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            0
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button name="00" onClick={handleClick}
            fontSize="2.4rem"
            width="12vw"
            height="10vh"
            m={1}
          >
            00
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button onClick={handleClear}
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
          <OrderConfirmationModal />
        </GridItem>
      </Grid >
    </Box>
  );
};

export default Calculator;
