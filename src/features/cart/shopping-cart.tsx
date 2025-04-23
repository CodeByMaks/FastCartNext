"use client"

import Link from "next/link"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { ProductTable } from '@/widgets/cart/product-table'
import { CartTotal } from '@/widgets/cart/cart-total'
import { useGetCartProductsQuery } from '@/entities/cart/cartApi'

export default function ShoppingCart() {
  const {data, isLoading, error} = useGetCartProductsQuery()

  const handleUpdateCart = () => {
    console.log("Cart updated")
  }

  const handleCheckout = () => {
    console.log("Proceeding to checkout")
  }

  const subtotal = data?.data[0]?.productsInCart.reduce((sum, product) => sum + product.product.price * product.product.quantity, 0)
  const shipping = "Free"
  const total = subtotal

  return (
    <div className="container mx-auto px-4 py-8 pb-28 w-[85%]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Cart</span>
      </div>

      {/* Product Table - Full Width */}
      <div className="mb-8">
        <ProductTable 
          products={data?.data[0]?.productsInCart || []} 
        />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Actions and Coupon */}
        <div className="lg:w-2/3">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="outline" asChild>
              <Link href="/">Return To Shop</Link>
            </Button>
            <div className="flex-1"></div>
            <Button variant="outline" onClick={handleUpdateCart}>
              Update Cart
            </Button>
            <Button variant="outline" className="text-destructive hover:bg-destructive/10">
              Remove all
            </Button>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Coupon Code</h3>
            <div className="flex gap-2 max-w-md">
              <Input
                placeholder="Enter coupon code"
                className="h-10"
              />
              <Button variant="outline" className="h-10">
                Apply
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Cart Total */}
        <div className="lg:w-1/3">
          <CartTotal 
            subtotal={subtotal} 
            shipping={shipping} 
            total={total} 
            onCheckout={handleCheckout} 
          />
        </div>
      </div>
    </div>
  )
}