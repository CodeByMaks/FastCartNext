"use client"

import { Button } from "@/shared/ui/button"

type CartTotalProps = {
  subtotal: number
  shipping: number | string
  total: number
  onCheckout?: () => void
}

export function CartTotal({ subtotal, shipping, total, onCheckout }: CartTotalProps) {
  return (
    <div className="border-2 border-black rounded-md p-6">
      <h2 className="text-lg font-bold mb-4">Cart Total</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between pb-3 border-b">
          <span>Subtotal:</span>
          <span className="font-medium">${subtotal}</span>
        </div>
        <div className="flex justify-between pb-3 border-b">
          <span>Shipping:</span>
          <span className="font-medium">{typeof shipping === "number" ? `$${shipping}` : shipping}</span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span>${total}</span>
        </div>
      </div>

      <Button className="w-full bg-red-500 hover:bg-red-600" onClick={onCheckout}>
        Proceed to checkout
      </Button>
    </div>
  )
}
