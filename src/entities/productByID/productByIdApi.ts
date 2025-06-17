// Пример: src/features/products/productApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://store-api.softclub.tj/',
	prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    } 
   }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `Product/get-product-by-id?id=${id}`,
    }),
  }),
});

export const { useGetProductByIdQuery } = productApi;