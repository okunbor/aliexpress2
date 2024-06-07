// src/services/productApi.ts
import { createApi } from '@reduxjs/toolkit/query/react';

import  baseQuery from "../services/base.query"
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery,
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
    fetchProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductByIdQuery } = productApi;
export default productApi;
