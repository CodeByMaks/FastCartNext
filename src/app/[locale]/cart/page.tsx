"use client"

import AuthGuard from '@/features/authGuard/AuthGuard'
import ShoppingCart from '@/features/cart/shopping-cart'

export default function Page() {
  return (
    <AuthGuard>
      <ShoppingCart />
    </AuthGuard>
)
}
