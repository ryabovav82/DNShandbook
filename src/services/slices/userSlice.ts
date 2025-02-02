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
    registerUserApi, URLDB
} from '../../utils/handbook-api';

import { TUser } from '../../utils/types.ts';

type TUserState = {
  isAuthChecked: boolean;
  isAuth: boolean;
  isRegistered: boolean;
  loginError?: SerializedError;
  registerError?: SerializedError;
  data: TUserData;
};

type TUserData = {
  id: string,
  email: string,
  userName: string,
  role: string,
  isActivated: boolean
}

export const initialState: TUserState = {
  isAuthChecked: false,
  isAuth: false,
  isRegistered: false,
  data: {
      id: '',
      email: '',
      userName: '',
      role: '',
      isActivated: false,
  }
};

export const checkAuth = createAsyncThunk(
    'user/checkAuth',
    async () => {
      const response = await fetch(`${URLDB}/users/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        credentials: 'include'
      });
      return await response.json();
    }
);

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        const fetchUserData = async () => {
            const response = await fetch(`${URLDB}/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            });
            if (response.status === 401) {
                const refreshResponse = await fetch(`${URLDB}/users/refresh`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    credentials: 'include'
                });
                const dataOk = await refreshResponse;
                if(!dataOk.ok) {
                    console.log('Авторизация закончилась')
                }
                const data = await dataOk.json();
                localStorage.setItem('accessToken', data.accessToken);
                return await fetchUserData();
            }
            return await response.json();
        };

        return await fetchUserData();
    }
);

export const register = createAsyncThunk<TUser, TRegisterData>(
  'user/register',
  async (data) => await registerUserApi(data)
);

export const login = createAsyncThunk<TUser, TLoginData>(
  'user/login',
  async (data) => await loginUserApi(data)
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async () => {
      const response = await fetch(`${URLDB}/users/logout`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          credentials: 'include'
      });
      return await response.json();
  }
);

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isRegistered = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.data = action.payload.user;
        if (action.payload.message === 'Email not found' ||  action.payload.message === 'Password Error') {
          state.isAuth = false
        } else state.isAuth = true;
        if (state.isAuth === true) localStorage.setItem('accessToken', action.payload.accessToken);
      })
      .addCase(logoutUser.fulfilled, (state) => {
        console.log('LOGOUT');
        state.isAuthenticated = false;
          localStorage.removeItem('accessToken');
        state.data = {
          id: '',
          email: '',
          userName: '',
          role: '',
          isActivated: false,
        };
      })
        .addCase(logoutUser.rejected, (state) => {
            console.log('LOGOUT ERROR');
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
            if(action.payload) {
                if(action.payload.accessToken) {
                    state.data = action.payload.user;
                    state.isAuth = true;
                }
                if (state.isAuth === true) localStorage.setItem('accessToken', action.payload.accessToken);
            }
        })
      .addCase(getUser.fulfilled, (state, action) => {
          console.log(action.payload)
        // state.isAuthenticated = true;
        // state.isAuthChecked = true;
        // state.data = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.isAuthChecked = true;
          console.log('get User ERROR')
      });
  }
});

export default slice.reducer;
