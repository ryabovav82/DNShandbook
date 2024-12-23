import {
  SerializedError,
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';

import {
  TLoginData,
  TRegisterData,
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi
} from '../../utils/handbook-api';

import { TUser } from '../../utils/types.ts';
import { clearTokens, storeTokens } from '../../utils/auth';

type TUserState = {
  isAuthChecked: boolean;
  isAuthenticated: boolean;
  loginError?: SerializedError;
  registerError?: SerializedError;
  data: TUser;
};

export const initialState: TUserState = {
  isAuthChecked: false,
  isAuthenticated: false,
  data: {
      id: 1,
    name: '',
    email: ''
  }
};

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { rejectWithValue }) => {
    const res = await getUserApi();
    if (!res?.success) {
      return rejectWithValue(res);
    }
    return res.user;
  }
);

export const register = createAsyncThunk<TUser, TRegisterData>(
  'user/register',
  async (data, { rejectWithValue }) => {
    const res = await registerUserApi(data);
    if (!res?.success) {
      return rejectWithValue(res);
    }
    const { user, refreshToken, accessToken } = res;
    storeTokens(refreshToken, accessToken);
    console.log(user);
    return user;
  }
);

export const login = createAsyncThunk<TUser, TLoginData>(
  'user/login',
  async (data, { rejectWithValue }) => {
    const res = await loginUserApi(data);
    if (!res?.success) {
      return rejectWithValue(res);
    }
    const { user, refreshToken, accessToken } = res;
    storeTokens(refreshToken, accessToken);
    return user;
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { rejectWithValue }) => {
    const res = await logoutApi();
    if (!res?.success) {
      return rejectWithValue(res);
    }
    clearTokens();
  }
);

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.registerError = undefined;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.registerError = undefined;
        state.isAuthenticated = true;
        state.data = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.registerError = action.meta.rejectedWithValue
          ? (action.payload as SerializedError)
          : action.error;
      })
      .addCase(login.pending, (state, action) => {
        state.loginError = undefined;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginError = undefined;
        state.isAuthenticated = true;
        state.data = action.payload;
        console.log(state.isAuthChecked);
        console.log(state.isAuthenticated);
      })
      .addCase(login.rejected, (state, action) => {
        state.loginError = action.meta.rejectedWithValue
          ? (action.payload as SerializedError)
          : action.error;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        console.log('LOGOUT');
        state.isAuthenticated = false;
        state.data = {
          email: '',
          name: ''
        };
      })
      .addCase(logoutUser.rejected, (state) => {
        console.log('LOGOUT ERROR');
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isAuthChecked = true;
        state.data = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.isAuthChecked = true;
      });
  }
});

export default slice.reducer;
