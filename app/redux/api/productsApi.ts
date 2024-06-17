import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import build from 'next/dist/build';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '',
      providesTags: ({ results }) =>
        results
          ? [
            ...results.map(({ id }: { id: string }) => ({
              type: 'Products',
              id,
            })),
            { type: 'Products', id: 'LIST' },
          ]
          : [{ type: 'Products', id: 'LIST' }],
    }),
  })
});
