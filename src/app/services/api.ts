// api  services
import axios from 'axios';

const API_URL = 'https://dummyjson.com/auth'; // Adjust to your backend API

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
      }
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

export const signup = (email: string, password: string, name: string) => {
    return api.post('/signup', { email, password, name },

    );
};

export const login = (username: string, password: string) => {
    return api.post('/login', { username, password },
    
    );
};

export const refreshToken = (token: string) => {
    return api.post('/refresh', { token },
        
    );
};

export default api;
