/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react"
import { Heart, Trash2 } from "lucide-react"
import { Button } from "@/shared/ui/button"
import Link from "next/link"

interface Product {
  id: string
  productName: string
  price: number
  discountPrice: number
  hasDiscount: boolean
  image: string
  rating: number
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([])

  // Load wishlist from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('wishlist')
        const parsed = saved ? JSON.parse(saved) : []
        setWishlist(Array.isArray(parsed) ? parsed : [])
      } catch (e) {
        console.error("Failed to load wishlist", e)
        setWishlist([])
        localStorage.removeItem('wishlist')
      }
    }
  }, [])

  // Remove item from wishlist
  const removeFromWishlist = (productId: string) => {
    try {
      if (!Array.isArray(wishlist)) return
      
      const updatedWishlist = wishlist.filter(item => item?.id !== productId)
      setWishlist(updatedWishlist)
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
    } catch (e) {
      console.error("Failed to update wishlist", e)
    }
  }

  // Calculate discount percentage
  const calculateDiscountPercentage = (price: number, discountPrice: number) => {
    return Math.round(((price - discountPrice) / price) * 100)
  }

  return (
    <div className="w-[85%] container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Wishlist ({wishlist.length})</h1>
      
      {!Array.isArray(wishlist) || wishlist.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h2 className="text-2xl font-medium text-gray-600 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-6">Add items to your wishlist to save them for later</p>
          <Link href="/">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md relative border border-gray-100">
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-2 right-2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <Trash2 className="h-5 w-5 stroke-gray-500" />
              </button>

              <div className="relative h-48 flex items-center justify-center p-4">
                <img
                  src={`https://store-api.softclub.tj/images/${product.image}`}
                  alt={product.productName}
                  width={200}
                  height={200}
                  className="object-contain max-h-full"
                />
              </div>

              <div className="p-4">
                <h3 className="font-medium text-base mb-1">{product.productName}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 font-semibold">${product.discountPrice}</span>
                  {product.hasDiscount && (
                    <>
                      <span className="text-gray-400 line-through text-sm">${product.price}</span>
                      <span className="text-xs bg-red-100 text-red-500 px-1 py-0.5 rounded">
                        -{calculateDiscountPercentage(product.price, product.discountPrice)}%
                      </span>
                    </>
                  )}
                </div>
                <Button className="w-full mt-2 bg-black text-white hover:bg-black/90">
                  Add To Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}