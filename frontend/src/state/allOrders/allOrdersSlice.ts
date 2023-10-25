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
      const order = action.payload;
      const index = state.orders.findIndex((o) => o._id === order._id);
      state.orders[index] = order;
    },
  },
});

export const { setAllOrders, updateOrderState } = allOrdersSlice.actions;
