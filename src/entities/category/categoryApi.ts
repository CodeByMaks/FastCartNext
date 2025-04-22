import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
	reducerPath: 'categoryApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://store-api.softclub.tj/' }),
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: () => 'Category/get-categories',
		 }),
	})
})

export const { useGetCategoriesQuery } = categoryApi