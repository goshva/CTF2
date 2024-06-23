import { combineReducers, configureStore, createReducer } from '@reduxjs/toolkit';
import { postApi } from './api/postApi';
import { steamApi } from './api/steamApi';
import { chatApi } from './api/chatApi';
import { productsApi } from './api/productsApi';
import authReducer from './authSlice';
import filtersReducer from './marketFilterSlice'
import cartReducer from './cartSlice'


// Комбинируем все редукторы в один корневой редуктор
const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
  [steamApi.reducerPath]: steamApi.reducer,
  [chatApi.reducerPath]: chatApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  auth: authReducer,
  marketFilters: filtersReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware, steamApi.middleware, chatApi.middleware, productsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
