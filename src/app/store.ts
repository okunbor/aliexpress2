// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../app/slices/cartSlice";
import { authReducer } from "../app/slices/authSlice";
import { orderApi } from './services/orderApi';
import authMiddleware from "./listener.middleware/authmiddleware";
import productApi from "./services/productApi";


// Configure the store
const store = configureStore({
  reducer: {

    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,

    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware,productApi.middleware, orderApi.middleware),
});

store.subscribe(() => {
  const state = store.getState();
  if (state.auth.isAuthenticated) {
    localStorage.setItem('token', state.auth.token as string);
    localStorage.setItem('refreshToken', state.auth.refreshToken as string);
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;