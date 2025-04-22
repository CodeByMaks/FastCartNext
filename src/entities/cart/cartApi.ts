import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    // Получить продукты из корзины
    getCartProducts: builder.query({
      query: () => 'Cart/get-products-from-cart',
      providesTags: ['Cart']
    }),

    // Добавить продукт в корзину
    addProductToCart: builder.mutation({
      query: (body) => ({
        url: 'Cart/add-product-to-cart',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Cart']
    }),

    // Увеличить количество продукта в корзине
    increaseProductInCart: builder.mutation({
      query: (body) => ({
        url: 'Cart/increase-product-in-cart',
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Cart']
    }),

    // Уменьшить количество продукта в корзине
    reduceProductInCart: builder.mutation({
      query: (body) => ({
        url: 'Cart/reduce-product-in-cart',
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Cart']
    }),

    // Удалить продукт из корзины
    deleteProductFromCart: builder.mutation({
      query: (body) => ({
        url: 'Cart/delete-product-from-cart',
        method: 'DELETE',
        body
      }),
      invalidatesTags: ['Cart']
    }),

    // Очистить корзину
    clearCart: builder.mutation({
      query: () => ({
        url: 'Cart/clear-cart',
        method: 'DELETE'
      }),
      invalidatesTags: ['Cart']
    })
  })
})

export const {
  useGetCartProductsQuery,
  useAddProductToCartMutation,
  useIncreaseProductInCartMutation,
  useReduceProductInCartMutation,
  useDeleteProductFromCartMutation,
  useClearCartMutation
} = cartApi