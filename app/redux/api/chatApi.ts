import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Создаем API для взаимодействия с вашим сервером или API
export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://countertrade.vit.ooo/v1/api' }), // Укажите базовый URL вашего API
  endpoints: (builder) => ({
    // Определение эндпоинта для получения списка друзей
    getUserChats: builder.query({
      query: (userId: string) => `/user/${userId}`,
    }),
  }),
});

// Экспортируем методы для вызова API
export const { useGetUserChatsQuery, useLazyGetUserChatsQuery } = chatApi;