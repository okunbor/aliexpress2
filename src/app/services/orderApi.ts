// src/services/orderApi.ts
import { createApi} from '@reduxjs/toolkit/query/react';

import  CartProduct  from '../../types/CartProducts';
import  baseQuery from "../services/base.query"
interface PlaceOrderRequest {
  cart: CartProduct[];
  totalAmount: number;
}

interface PlaceOrderResponse {
  paymentUrl: string;
}


export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery,
  
  endpoints: (builder) => ({
    placeOrder: builder.mutation<PlaceOrderResponse, PlaceOrderRequest>({
      query: (order) => ({
        url: '/place-order',
        method: 'POST',
        body: order,
      }),
    }),
  }),
});

export const { usePlaceOrderMutation } = orderApi;
export default orderApi;
