import axios from 'axios';
import store from '../store/store';
import { refreshUserToken, logout } from "../store/auth/authSlice";

const API_URL = 'https://dummyjson.com/auth'; // Adjust to your backend API

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
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

export const signup = (email: string, password: string ,name:string) => {
    return api.post('/signup', { email, password , name });
};

export const login = (email: string, password: string) => {
    return api.post('/login', { email, password });
};

export const refreshToken = (token: string) => {
    return api.post('/refresh', { token });
};
