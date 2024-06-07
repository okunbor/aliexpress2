/* eslint-disable @typescript-eslint/no-unused-vars */
// src/services/authApi.ts
import { createApi } from '@reduxjs/toolkit/query/react';


import { AuthResponse, RenewTokenResponse } from '../../types/auth'; // Ensure to define these types
import  baseQuery from "../services/base.query"

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, { email: string; password: string; name: string }>({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation<AuthResponse, { username: string; password: string }>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    refreshToken: builder.mutation<RenewTokenResponse, { token: string }>({
      query: (body) => ({
        url: '/refresh',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useRefreshTokenMutation } = authApi;
export default authApi;
