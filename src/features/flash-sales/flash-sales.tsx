/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { Heart, Eye, ShoppingCart } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/utils"
import "swiper/css"
import "swiper/css/navigation"
import { useGetProductsQuery } from '@/entities/products/productsApi'
import { useRouter } from "next/navigation"
import { useAddProductToCartMutation } from '@/entities/cart/cartApi'

interface Product {
  id: string
  productName: string
  price: number
  discountPrice: number
  hasDiscount: boolean
  image: string
  rating: number
}

export default function FlashSales() {
  const router = useRouter()
  const [days, setDays] = useState(3)
  const [hours, setHours] = useState(23)
  const [minutes, setMinutes] = useState(19)
  const [seconds, setSeconds] = useState(56)
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('wishlist')
        const parsed = saved ? JSON.parse(saved) : []
        return Array.isArray(parsed) ? parsed : []
      } catch (e) {
        console.error("Failed to parse wishlist", e)
        return []
      }
    }
    return []
  })

  const { data, isLoading, error } = useGetProductsQuery(undefined)
  const [addToCart] = useAddProductToCartMutation()
  
  // Countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes > 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else if (hours > 0) {
        setHours(hours - 1)
        setMinutes(59)
        setSeconds(59)
      } else if (days > 0) {
        setDays(days - 1)
        setHours(23)
        setMinutes(59)
        setSeconds(59)
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [days, hours, minutes, seconds])

  // Save wishlist to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
    } catch (e) {
      console.error("Failed to save wishlist", e)
    }
  }, [wishlist])

  // Handle add to cart
  const handleAddToCart = async (productId: string) => {
    try {
      await addToCart({ productId, quantity: 1 }).unwrap()
    } catch (err) {
      console.error('Failed to add to cart:', err)
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading products</div>

  // Format time units to always show two digits
  const formatTimeUnit = (unit: number) => {
    return unit.toString().padStart(2, "0")
  }

  // Calculate discount percentage
  const calculateDiscountPercentage = (price: number, discountPrice: number) => {
    return Math.round(((price - discountPrice) / price) * 100)
  }

  // Check if product is in wishlist
  const isInWishlist = (productId: string) => {
    return Array.isArray(wishlist) && wishlist.some(item => item?.id === productId)
  }

  // Toggle product in wishlist
  const toggleWishlist = (product: Product) => {
    try {
      setWishlist(prev => {
        if (!Array.isArray(prev)) return []
        const isAlreadyInWishlist = prev.some(item => item?.id === product.id)
        if (isAlreadyInWishlist) {
          return prev.filter(item => item?.id !== product.id)
        } else {
          return [...prev, product]
        }
      })
    
    } catch (e) {
      console.error("Failed to update wishlist", e)
    }
  }

  // Navigate to wishlist page
  const navigateToWishlist = () => {
    router.push('/wishlist')
  }

  // Navigate to cart page
  const navigateToCart = () => {
    router.push('/cart')
  }

  // Render star ratings
  const renderRating = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={cn("w-4 h-4", i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300")}
          fill="orange"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))
  }

  return (
    <div className="w-[85%] container mx-auto px-4 py-8">
      <div className="mb-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-2 bg-red-500"></div>
          <span className="text-red-500 font-medium">Today`s</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-8">
        <h2 className="text-3xl font-bold mb-4 md:mb-0">Flash Sales</h2>

        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <div className="text-center">
              <span className="text-3xl font-bold">{formatTimeUnit(days)}</span>
              <div className="text-xs text-gray-500">Days</div>
            </div>
            <span className="text-3xl font-bold mx-2">:</span>
            <div className="text-center">
              <span className="text-3xl font-bold">{formatTimeUnit(hours)}</span>
              <div className="text-xs text-gray-500">Hours</div>
            </div>
            <span className="text-3xl font-bold mx-2">:</span>
            <div className="text-center">
              <span className="text-3xl font-bold">{formatTimeUnit(minutes)}</span>
              <div className="text-xs text-gray-500">Minutes</div>
            </div>
            <span className="text-3xl font-bold mx-2">:</span>
            <div className="text-center">
              <span className="text-3xl font-bold">{formatTimeUnit(seconds)}</span>
              <div className="text-xs text-gray-500">Seconds</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-between items-center absolute top-1/2 left-[-50] right-[-50] z-10 px-2 transform -translate-y-1/2 pointer-events-none">
          <button className="swiper-button-prev bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors pointer-events-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="swiper-button-next bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors pointer-events-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="flash-sales-swiper"
        >
          {data?.data?.products?.map((product) => {
            const discountPercentage = calculateDiscountPercentage(product.price, product.discountPrice)
            
            return (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-none overflow-hidden relative group border border-gray-100">
                  {product.hasDiscount && (
                    <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-sm">
                      -{discountPercentage}%
                    </div>
                  )}
                  
                  <div className="absolute z-10 top-1 right-1 flex flex-col gap-2">
                    <button
                      onClick={() => toggleWishlist({
                        id: product.id,
                        productName: product.productName,
                        price: product.price,
                        discountPrice: product.discountPrice,
                        hasDiscount: product.hasDiscount,
                        image: product.image,
                        rating: product.rating
                      })}
                      className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <Heart className={cn("h-5 w-5", isInWishlist(product.id) ? "fill-red-500 stroke-red-500" : "stroke-gray-500")} />
                    </button>

                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                      <Eye className="h-5 w-5 stroke-gray-500" />
                    </button>
                  </div>

                  <div className="relative h-48 flex items-center justify-center p-4">
                    <img
                      src={`https://store-api.softclub.tj/images/${product.image}`}
                      alt={product.productName}
                      width={200}
                      height={200}
                      className="object-contain max-h-full"
                    />
                  </div>
                  
                  <div className="w-full absolute top-40 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      className="w-full py-2 rounded-none bg-black text-white hover:bg-black/90 flex items-center justify-center gap-2"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add To Cart
                    </Button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-base mb-1">{product.productName}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-500 font-semibold">${product.discountPrice}</span>
                      {product.hasDiscount && (
                        <span className="text-gray-400 line-through text-sm">${product.price}</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <div className="flex mr-1">{renderRating(product.rating)}</div>
                      <span className="text-gray-500 text-sm">54</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button 
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded"
          onClick={navigateToWishlist}
        >
          View Wishlist
        </Button>
        <Button 
          className="bg-black hover:bg-black/90 text-white px-8 py-2 rounded"
          onClick={navigateToCart}
        >
          View Cart
        </Button>
      </div>
    </div>
  )
}