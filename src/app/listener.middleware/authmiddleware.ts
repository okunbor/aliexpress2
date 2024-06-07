// src/middleware/authMiddleware.ts
import { Middleware } from '@reduxjs/toolkit';
import { authApi } from '../services/auth';
import { RootState } from '../store';
import { logout, updateToken } from '../slices/authSlice';
import { RenewTokenResponse } from '../../types/auth';

const authMiddleware: Middleware = (store) => (next) => async (action) => {
  const { auth } = store.getState() as RootState;

  if (auth.isAuthenticated) {
    authApi.enhanceEndpoints({
      addTagTypes: ['Auth'],
      endpoints: {
        refreshToken: {
          invalidatesTags: ['Auth'],
        },
      },
    });
  // Ensure the cached data for refreshToken is up to date
    authApi.util.updateQueryData('refreshToken', undefined, (draft) => {
      draft.token = auth.token;
      draft.refreshToken = auth.refreshToken;
    });

    
  }

  if (action.type === 'refreshToken/rejected') {
    store.dispatch(logout());
  }

  if (action.type === 'refreshToken/fulfilled') {
    const { token, refreshToken, expired_in } = action.payload as RenewTokenResponse;
    const newTokenData: RenewTokenResponse = {
      token,
      refreshToken,
      expired_in,
    };

    store.dispatch(updateToken(newTokenData));
  }

  return next(action);
};

export default authMiddleware;
