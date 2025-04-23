import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://store-api.softclub.tj/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('access_token', `Bearer ${token}`)
      }
      return headers
    } 
    }),
  endpoints: (builder) => ({
	 getProducts: builder.query({
		query: () => 'Product/get-products',
	 }),
  })
})
export const { useGetProductsQuery } = productsApi