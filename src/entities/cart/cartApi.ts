import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cartApi = createApi({
  reducerPath: 'cartApi',
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
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    // Получить продукты из корзины
    getCartProducts: builder.query({
      query: () => 'Cart/get-products-from-cart',
      providesTags: ['Cart']
    }),

    // Добавить продукт в корзину
    addProductToCart: builder.mutation({
      query: (id) => ({
        url: `Cart/add-product-to-cart?id=${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Cart']
    }),

    // Увеличить количество продукта в корзине
    increaseProductInCart: builder.mutation({
      query: (id) => ({
        url: `Cart/increase-product-in-cart?id=${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Cart']
    }),

    // Уменьшить количество продукта в корзине
    reduceProductInCart: builder.mutation({
      query: (id) => ({
        url: `Cart/reduce-product-in-cart?id=${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Cart']
    }),

    // Удалить продукт из корзины
    deleteProductFromCart: builder.mutation({
      query: (id) => ({
        url: `Cart/delete-product-from-cart?id=${id}`,
        method: 'DELETE',
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