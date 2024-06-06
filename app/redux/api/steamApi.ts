import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.BASE_API_URL
// Создаем API для взаимодействия с вашим сервером или API
export const steamApi = createApi({
  reducerPath: 'steamApi',
  baseQuery: fetchBaseQuery({ baseUrl }), // Укажите базовый URL вашего API
  endpoints: (builder) => ({
    // Определение эндпоинта для получения списка друзей
    getFriendList: builder.query({
      query: (steamId: string) => `/v1/api/getFriends/${steamId}`,
    }),
  }),
});

// Экспортируем методы для вызова API
export const { useGetFriendListQuery, useLazyGetFriendListQuery } = steamApi;