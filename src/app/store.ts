// src/store/store.ts
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "../app/slices/cartSlice";
import { authReducer } from "../app/slices/authSlice";
import { orderApi } from './services/orderApi';
import authMiddleware from "./listener.middleware/authmiddleware";
import productApi from "./services/productApi";
import productHandler from "./listener.middleware/product.handler";
import { setupListeners } from "@reduxjs/toolkit/query";

import userApi from "./services/users";
import { wishListReducer } from "./slices/wishlistSlice";

const reducer = combineReducers({


  [productApi.reducerPath]: productApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [userApi.reducerPath]: userApi.reducer,

  wishlist: wishListReducer,
  cart: cartReducer,
  auth: authReducer,


})

// Configure the store
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(productApi.middleware)
    .concat(userApi.middleware)
    .concat(productHandler)
    .concat(authMiddleware)

});

store.subscribe(() => {
  const state = store.getState();
  if (state.auth.isAuthenticated) {
    localStorage.setItem('token', state.auth.token as string);
    localStorage.setItem('refreshToken', state.auth.refreshToken as string);
  }
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;