import { MenuInformationForReception } from '../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const state = {
  cart: [] as MenuInformationForReception[],
};

export type ArrangeState = {
  id: string;
  arrange: string;
  checked: boolean;
};

export type ArrangeState = {
  id: string;
  arrange: string;
  checked: boolean;
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: state,
  reducers: {
    addMenu: (
      state,
      action: PayloadAction<MenuInformationForReception>,
    ): void => {
      state.cart.push(action.payload);
    },
    removeMenu: (state, action: PayloadAction<string>): void => {
      if (state.cart.length === 0) return;
      const id = action.payload;
      const newCart = state.cart.filter((order) => order.id !== id);
      state.cart = newCart;
    },
    removeMenuByIndex: (state, action: PayloadAction<number>): void => {
      const index = action.payload;
      state.cart.splice(index, 1);
    },
    updateCheckBox: (state, action: PayloadAction<ArrangeState>): void => {
      const { id, arrange, checked } = action.payload;
      const index = state.cart.findIndex((order) => order.id === id);
      const target = state.cart[index];
      if ('arranges' in target) {
        const arranges = target.arranges as { [key: string]: boolean };
        arranges[arrange] = checked;
      }
      state.cart = [...state.cart];
    },
  },
});

export const { addMenu, removeMenu, removeMenuByIndex, updateCheckBox } =
  cartSlice.actions;
