"use client"

import Link from "next/link"
import { useState } from "react"

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { ProductTable } from '@/widgets/cart/product-table'
import { CartTotal } from '@/widgets/cart/cart-total'

export default function ShoppingCart() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 2,
      name: "HI Gamepad",
      price: 550,
      quantity: 2,
      image: "/placeholder.svg?height=64&width=64",
    },
  ])

  const [couponCode, setCouponCode] = useState("")

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setProducts(products.map((product) => (product.id === id ? { ...product, quantity } : product)))
  }

  const handleRemoveItem = (id: number) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const handleRemoveAll = () => {
    setProducts([])
  }

  const handleUpdateCart = () => {
    console.log("Cart updated")
  }

  const handleApplyCoupon = () => {
    console.log("Applying coupon:", couponCode)
  }

  const handleCheckout = () => {
    console.log("Proceeding to checkout")
  }

  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
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
          products={products} 
          onUpdateQuantity={handleUpdateQuantity} 
          onRemoveItem={handleRemoveItem} 
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
            <Button variant="outline" className="text-destructive hover:bg-destructive/10" onClick={handleRemoveAll}>
              Remove all
            </Button>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Coupon Code</h3>
            <div className="flex gap-2 max-w-md">
              <Input
                placeholder="Enter coupon code"
                className="h-10"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button variant="outline" className="h-10" onClick={handleApplyCoupon}>
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