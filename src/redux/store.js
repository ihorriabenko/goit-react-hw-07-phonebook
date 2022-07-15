import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterSlice from './reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: counterSlice,
  },
  middleware,
});

export default store;
