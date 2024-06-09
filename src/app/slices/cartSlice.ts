

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartProduct from "../../types/CartProducts";
import { loadState, saveState } from "../../utils";





export interface CartState {
  cart: CartProduct[];
}

interface IncreaseQuantityPayload {
  id: number;
}

interface DecreaseQuantityPayload {
  id: number;
}

interface RemoveItemPayload {
  id: number;
}

const initialState: CartState = {
  cart: loadState(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      saveState(state.cart); // Save state to localStorage
    },
  

    increaseQuantity: (state, action: PayloadAction<IncreaseQuantityPayload>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined) {
        item.quantity++;
      }
      saveState(state.cart); // Save state to localStorage
    },

    decreaseQuantity: (state, action: PayloadAction<DecreaseQuantityPayload>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined && item.quantity > 1) {
        item.quantity--;
      }
      saveState(state.cart); // Save state to localStorage
    },

    removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      saveState(state.cart); // Save state to localStorage
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
