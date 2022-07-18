import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import counterSlice from './reducer';
import { contactsApi } from './slice';
import { setupListeners } from '@reduxjs/toolkit/query'


const store = configureStore({
  reducer: {
    // contacts: counterSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch)

export default store;
