import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Создаем API для взаимодействия с вашим сервером или API
export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-type', 'application/json');
      return headers;
    },
  }), // Укажите базовый URL вашего API
  endpoints: (builder) => ({
    getUserChats: builder.query({
      query: (userId: string) => `/user/${userId}`,
    }),

    getChatMessages: builder.query({
      query: (chatId: string) => `/chat/${chatId}`,
    }),
  }),
});

// Экспортируем методы для вызова API
export const { useGetUserChatsQuery, useLazyGetUserChatsQuery, useGetChatMessagesQuery } = chatApi;
