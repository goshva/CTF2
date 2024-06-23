import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.ctforumtest.ru/v1/',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `product`,
    }),
  })
});

export const { useGetAllProductsQuery } = productsApi;
