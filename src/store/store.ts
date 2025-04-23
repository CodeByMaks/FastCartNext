import { authApi } from '@/entities/auth/authApi'
import { cartApi } from '@/entities/cart/cartApi'
import { categoryApi } from '@/entities/category/categoryApi'
import { productsApi } from '@/entities/products/productsApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
	[categoryApi.reducerPath]: categoryApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
	[cartApi.reducerPath]: cartApi.reducer,
   [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
	 getDefaultMiddleware().concat(
		categoryApi.middleware,
		productsApi.middleware,
		cartApi.middleware,
		authApi.middleware,
	),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch