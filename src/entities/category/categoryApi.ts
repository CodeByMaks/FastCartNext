import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
	reducerPath: 'categoryApi',
	baseQuery: fetchBaseQuery({ 
		baseUrl: 'https://store-api.softclub.tj/',
		prepareHeaders: (headers) => {
			const token = localStorage.getItem('token')
			if (token) {
			  headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		 } 
		}),
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: () => 'Category/get-categories',
		 }),
	})
})

export const { useGetCategoriesQuery } = categoryApi