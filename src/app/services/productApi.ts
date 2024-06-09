// src/services/productApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://dummyjson.com'; // Replace with your backend API URL

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  thumbnail : string;
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<unknown[], void>({
      query: () => ({  url:`/products`  }) ,
    }),
    fetchProductById: builder.query<unknown, string>({
      query: (id) => ({  url: `/products/${id}` }),
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductByIdQuery } = productApi;
export default productApi;
