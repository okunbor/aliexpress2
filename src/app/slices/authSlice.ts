
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AuthResponse, User } from '../../types/auth'; // Ensure to define these types
import authApi from '../services/auth';
import {User } from '../../types/auth'; // Ensure to define these types


interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    },
    updateToken(state, action: PayloadAction<{ token: string; refreshToken: string }>) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      // localStorage.setItem('expireTime', `${expireTime}`);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('token', payload.token);
      localStorage.setItem('refreshToken', payload.refreshToken);
    });
    builder.addMatcher(authApi.endpoints.signup.matchFulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('token', payload.token);
      localStorage.setItem('refreshToken', payload.refreshToken);
    });
    builder.addMatcher(authApi.endpoints.refreshToken.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      localStorage.setItem('token', payload.token);
      localStorage.setItem('refreshToken', payload.refreshToken);
    });
  },
});

export const { logout, updateToken } = authSlice.actions;
export const authReducer =  authSlice.reducer;
