/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://store-api.softclub.tj/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`) // Исправлено на стандартный Authorization
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: '/Account/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/Account/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token)
          // Вызываем событие для обновления всех AuthGuard
          window.dispatchEvent(new Event('storage'))
        }
        return response
      },
    }),
    checkAuth: builder.query({
      query: () => '/Account/check-auth',
    }),
  }),
})

export const { 
  useRegisterMutation, 
  useLoginMutation,
  useCheckAuthQuery
} = authApi