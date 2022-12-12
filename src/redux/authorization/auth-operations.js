import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/* 1. register - регистрация пользователя { name, email, password }
 * 2. logIn - вхождение по имени и паролю { email, password }
 * 3. logOut - выход пользователя из системы
 * set(token) - добавление токена (ключа) в HTTP-заголовок 
 * после успешной регистрации для работы HTTP-запросов
 * unset(token) - удаление токена (ключа) из HTTP-заголовка 
 */

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
// fetch('', { method: 'POST', header: { Authorization: 'Bearer token' } });


const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    // add token to next http-requests
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});



const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
      // add token to next http-requests
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    // unset token from random http-requests
    token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});
/*
 * GET @ /users/current
 * 1. Fetch-запрос на бекенд за данными пользователя 
 * при обновлении (перезагрузке) страницы - чтоб
 * был залогиненый пользователь в AppBar
 * 2. Токен берем из текущего state через getState()
 * 3. Если токена нет, выходим не делая http-запрос на бекенд
 * 4. Если токен есть, добавляет его в HTTP-заголовок и делаем
 * http-запрос, получая залогиненого пользователя,
 * isLoggin = true
 */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
