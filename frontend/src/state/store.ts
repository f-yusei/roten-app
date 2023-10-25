import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart/cartSlice';
import { allOrdersSlice } from './allOrders/allOrdersSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    allOrders: allOrdersSlice.reducer,
  },
});
