// src/middleware/authMiddleware.ts
import { Middleware } from '@reduxjs/toolkit';
import axios from 'axios';
import { refreshUserToken, logout } from '../store/auth/authSlice';
import api from '../services/api';
import store from '../store/store';

const authMiddleware: Middleware = (store) => (next) => async (action) => {
    if (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')) {
        const { auth } = store.getState();
        if (auth.isAuthenticated) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
        }
    }

    if (action.type === 'auth/refresh/rejected') {
        store.dispatch(logout());
    }

    return next(action);
};

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken) {
                try {
                    const response = await store.dispatch(refreshUserToken({ token: refreshToken }));
                    if (response.payload) {
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.payload.token;
                        return api(originalRequest);
                    }
                } catch (refreshError) {
                    store.dispatch(logout());
                }
            }
        }
        return Promise.reject(error);
    }
);

export default authMiddleware;
