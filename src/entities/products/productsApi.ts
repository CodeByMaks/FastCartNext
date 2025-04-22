import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://store-api.softclub.tj/' }),
  endpoints: (builder) => ({
	 getProducts: builder.query({
		query: () => 'Product/get-products',
	 }),
  })
})
export const { useGetProductsQuery } = productsApi