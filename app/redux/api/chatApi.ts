import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.BASE_API_URL
// Создаем API для взаимодействия с вашим сервером или API
export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl }), // Укажите базовый URL вашего API
  endpoints: (builder) => ({
    getUserChats: builder.query({
      query: (userId: string) => `/v1/api/user/${userId}`,
    }),

    getChatMessages: builder.query({
      query: (chatId: string) => `/v1/api/chat/${chatId}`,
    }),
  }),
});

// Экспортируем методы для вызова API
export const { useGetUserChatsQuery, useLazyGetUserChatsQuery, useGetChatMessagesQuery } = chatApi;