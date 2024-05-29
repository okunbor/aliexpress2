import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { RootState } from "../store";
import { login, signup, refreshToken } from '../../services/api';

interface AuthState {
    token: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

interface UserPayload {
    email: string;
    password: string;
    name : string;
}

interface TokenPayload {
    token: string;
}

const initialState: AuthState = {
    token: localStorage.getItem('token'),
    refreshToken: localStorage.getItem('refreshToken'),
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
    error: null,
};

export const userSignup = createAsyncThunk(
    'auth/signup',
    async ({ email, password, name }: UserPayload, thunkAPI) => {
        try {
            const response = await signup(email, password,name);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }: UserPayload, thunkAPI) => {
        try {
            const response = await login(email, password);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const refreshUserToken = createAsyncThunk(
    'auth/refresh',
    async ({ token }: TokenPayload, thunkAPI) => {
        try {
            const response = await refreshToken(token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
     
    reducers: {
        logout: (state) => {
            state.token = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userSignup.pending, (state) => {
                state.loading = true;
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .addCase(userSignup.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.token = action.payload.token;
                state.refreshToken = action.payload.refreshToken;
                state.isAuthenticated = true;
                state.error = null;
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('refreshToken', action.payload.refreshToken);
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .addCase(userSignup.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .addCase(userLogin.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.token = action.payload.token;
                state.refreshToken = action.payload.refreshToken;
                state.isAuthenticated = true;
                state.error = null;
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('refreshToken', action.payload.refreshToken);
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .addCase(userLogin.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .addCase(refreshUserToken.fulfilled, (state, action: PayloadAction<any>) => {
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            });
    },
});

export const { logout } = authSlice.actions;

// export const selectAuth = (state: RootState) => state.auth;

 export const authReducer =  authSlice.reducer;
