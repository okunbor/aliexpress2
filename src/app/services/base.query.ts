/* eslint-disable @typescript-eslint/no-unused-vars */
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getLocalAuthData } from "../../utils";

// import { RootState } from '../store';

const API_URL = 'https://dummyjson.com/auth'; // Adjust to your backend API


const baseQuery =  fetchBaseQuery({
    baseUrl: API_URL,
   
    prepareHeaders: (headers, { endpoint}) => {
    //   const token = (getState() as RootState).auth.token;
         const token  = getLocalAuthData() 
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  })

  export default  baseQuery;