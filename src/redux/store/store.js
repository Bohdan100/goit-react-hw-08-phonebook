import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from '../slice';
import { filterReducer } from '../slice';
import { themeReducer } from '../slice';
import { authReducer } from '../authorization';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user-theme'],
};

const themePersistedConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistedConfig, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
