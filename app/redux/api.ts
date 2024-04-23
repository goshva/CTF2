import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';


const token = Cookies.get('jwt');
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://countertrade.vit.ooo/v1/api/' }),
  endpoints: (build) => ({

    getChats: build.query({
      query: () => `user/${token}`,
    })

    
  }),
});

export const { useGetChatsQuery } = api;
