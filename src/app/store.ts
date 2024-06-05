// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../app/slices/cartSlice";
import { authReducer } from "../app/slices/authSlice";
import authMiddleware from "../middleware/authmiddleware";


// Configure the store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
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