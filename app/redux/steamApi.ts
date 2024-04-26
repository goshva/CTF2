import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Создаем API для взаимодействия с вашим сервером или API
export const steamApi = createApi({
  reducerPath: 'steamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.steampowered.com' }), // Укажите базовый URL вашего API
  endpoints: (builder) => ({
    // Определение эндпоинта для получения списка друзей
    getFriendList: builder.query({
      query: (steamId: string) => `ISteamUser/GetFriendList/v0001/?key=23B258CBC2F04B7F9E5724F5AAF6E72E&steamid=${steamId}&relationship=friend`,
    }),
  }),
});

// Экспортируем методы для вызова API
export const { useGetFriendListQuery } = steamApi;