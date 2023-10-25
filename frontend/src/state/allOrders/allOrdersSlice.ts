import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OrderInformationType } from '../../types';

const state = { orders: [] as OrderInformationType[] };

export const allOrdersSlice = createSlice({
  name: 'allOrdersSlice',
  initialState: state,
  reducers: {
    setAllOrders: (
      state,
      action: PayloadAction<OrderInformationType[]>,
    ): void => {
      state.orders = action.payload;
    },
    updateOrderState: (
      state,
      action: PayloadAction<OrderInformationType>,
    ): void => {
      const index = state.orders.findIndex(
        (order) => order._id === action.payload._id,
      );
      state.orders[index] = action.payload;
    },
  },
});

export const { setAllOrders, updateOrderState } = allOrdersSlice.actions;
