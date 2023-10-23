import { MenuInformation } from '../../types';
import { createSlice } from '@reduxjs/toolkit';

const state = {
  cart: [] as MenuInformation[],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: state,
  reducers: {
    //Actionを記述
  },
});
