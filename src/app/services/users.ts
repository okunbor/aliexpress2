
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/services/authApi.ts
import { createApi } from '@reduxjs/toolkit/query/react';


import { UserInfo } from '../../types/user'; // Ensure to define these types
import  baseQuery from "../services/base.query"

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: (builder) => ({
    imageUpload: builder.mutation<UserInfo, { image: string; }>({
      query: (credentials) => ({
        url: '/imageupload',
        method: 'POST',
        body: credentials,
      }),
    }),
    updatePassword: builder.mutation<UserInfo, { password: string }>({
      query: (credentials) => ({
        url: 'updatepassword',
        method: 'POST',
        body: credentials,
      }),
    }),
    billingAddress: builder.mutation<UserInfo, { address: string }>({
      query: (body) => ({
        url: '/billingaddress',
        method: 'POST',
        body,
      }),
    }),

    review: builder.mutation<UserInfo, { comment: string, rating: number }>({
        query: (body) => ({
          url: '/reviews',
          method: 'POST',
          body,
        }),
      }),

      activateEmailNotification: builder.mutation<UserInfo, { email: string,  }>({
        query: (body) => ({
          url: '/activeEmail',
          method: 'POST',
          body,
        }),
      }),
      changeEmailAddress: builder.mutation<UserInfo, { email: string, }>({
        query: (body) => ({
          url: '/changeEmail',
          method: 'POST',
          body,
        }),
      }),

      setSecurityQuestion: builder.mutation<UserInfo, { email: string, }>({
        query: (body) => ({
          url: '/setsecurityQuestion',
          method: 'POST',
          body,
        }),
      }),
  }),
});

export const {useActivateEmailNotificationMutation,useChangeEmailAddressMutation,useSetSecurityQuestionMutation, useImageUploadMutation, useUpdatePasswordMutation, useBillingAddressMutation,useReviewMutation } = userApi;
export default userApi;
