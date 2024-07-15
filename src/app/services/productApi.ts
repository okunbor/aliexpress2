// src/services/productApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CartProduct from '../../types/CartProducts';

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
    fetchProductById: builder.query<CartProduct, string>({
      query: (id) => ({  url: `/products/${id}` }),
    }),

    fetchProductByName: builder.query<CartProduct, string>({
      query: (name) => ({  url: `/products/search?q=${name}` }),
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductByIdQuery,useFetchProductByNameQuery } = productApi;
export default productApi;
