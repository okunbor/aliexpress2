

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartProduct from "../../types/CartProducts";
import { loadState, saveState } from "../../utils";





export interface wishlistState {
  wishlist: CartProduct[];
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

const initialState: wishlistState = {
  wishlist: loadState("wishlist"),
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<CartProduct>) => {
      const itemInCart = state.wishlist.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
        }
      } else {
        state.wishlist.push({ ...action.payload, quantity: 1 });
      }
      saveState(state.wishlist,"wishlist"); // Save state to localStorage
    },
  

    increaseQuantity: (state, action: PayloadAction<IncreaseQuantityPayload>) => {
      const item = state.wishlist.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined) {
        item.quantity++;
      }
      saveState(state.wishlist,"wishlist"); // Save state to localStorage
    },

    decreaseQuantity: (state, action: PayloadAction<DecreaseQuantityPayload>) => {
      const item = state.wishlist.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined && item.quantity > 1) {
        item.quantity--;
      }
      saveState(state.wishlist,"wishlist"); // Save state to localStorage
    },

    removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);
      saveState(state.wishlist,"wishlist"); // Save state to localStorage
    },
  },
});

export const { addToWishList, increaseQuantity, decreaseQuantity, removeItem } = wishListSlice.actions;

export const wishListReducer = wishListSlice.reducer;
