// store   for redux

import { configureStore } from "@reduxjs/toolkit";
import  {cartReducer}  from "./cart/cartSlice";
import {authReducer } from '../store/auth/authSlice';


// Configure the store


const store = configureStore({
  reducer: {
   cartReducer,
   authReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  if (state.authReducer.isAuthenticated) {
      localStorage.setItem('token', state.authReducer.token as string);
      localStorage.setItem('refreshToken', state.authReducer.refreshToken as string);
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


