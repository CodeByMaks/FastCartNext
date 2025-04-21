"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { Heart, Eye } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/utils"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

interface Product {
  id: string
  name: string
  currentPrice: number
  originalPrice: number
  discount: number
  image: string
  rating: number
  reviews: number
}

export default function FlashSales() {
  const [days, setDays] = useState(3)
  const [hours, setHours] = useState(23)
  const [minutes, setMinutes] = useState(19)
  const [seconds, setSeconds] = useState(56)

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

  // Sample product data
  const products: Product[] = [
    {
      id: "1",
      name: "HAVIT HV-G92 Gamepad",
      currentPrice: 120,
      originalPrice: 160,
      discount: 40,
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      reviews: 88,
    },
    {
      id: "2",
      name: "AK-900 Wired Keyboard",
      currentPrice: 960,
      originalPrice: 1160,
      discount: 35,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
      reviews: 75,
    },
    {
      id: "3",
      name: "IPS LCD Gaming Monitor",
      currentPrice: 370,
      originalPrice: 400,
      discount: 30,
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      reviews: 99,
    },
    {
      id: "4",
      name: "S-Series Comfort Chair",
      currentPrice: 375,
      originalPrice: 400,
      discount: 25,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 99,
    },
    {
      id: "5",
      name: "S-Series Comfort Chair",
      currentPrice: 375,
      originalPrice: 400,
      discount: 25,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 99,
    },
  ]

  // Format time units to always show two digits
  const formatTimeUnit = (unit: number) => {
    return unit.toString().padStart(2, "0")
  }

  // Render star ratings
  const renderRating = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={cn("w-4 h-4", i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300")}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))
  }

  return (
    <div className="w-[85%] container mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        <div className="bg-red-500 text-white px-3 py-1 rounded-md">
          <span className="text-sm font-medium">Today&apos;s</span>
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

          <div className="flex items-center gap-4">
            <button className="swiper-button-prev">
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
            <button className="swiper-button-next">
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
        </div>
      </div>

      <div className="relative">
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
          {products.map((product) => (
           <SwiperSlide key={product.id}>
			  <div className="bg-white rounded-none overflow-hidden relative group border border-gray-100">
				 {/* Бейдж скидки */}
				 <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-sm">
					-{product.discount}%
				 </div>
				 
				 {/* Heart (верхний правый угол) */}
				 <button className="absolute top-2 right-2 z-10">
					<Heart className="w-5 h-5 text-gray-600" />
				 </button>
				 
				 {/* Изображение товара */}
				 <div className="relative h-48 flex items-center justify-center p-4">
					<Image
					  src={product.image || "/placeholder.svg"}
					  alt={product.name}
					  width={200}
					  height={200}
					  className="object-contain max-h-full"
					/>
					
					{/* Eye (под Heart, но не в самом низу) */}
					<button className="absolute top-12 right-2 z-10"> {/* Изменено с bottom-0 на top-12 */}
					  <Eye className="w-5 h-5 text-gray-700" />
					</button>
				 </div>
				 
				 {/* Кнопка Add to Cart (появляется при наведении) */}
				 <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
					<Button className="w-full py-2 rounded-none bg-black text-white hover:bg-black/90">
					  Add To Cart
					</Button>
				 </div>
				 
				 {/* Информация о товаре */}
				 <div className="p-4">
					<h3 className="font-medium text-base mb-1">{product.name}</h3>
					<div className="flex items-center gap-2 mb-2">
					  <span className="text-red-500 font-semibold">${product.currentPrice}</span>
					  <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
					</div>
					<div className="flex items-center">
					  <div className="flex mr-1">{renderRating(product.rating)}</div>
					  <span className="text-gray-500 text-sm">({product.reviews})</span>
					</div>
				 </div>
			  </div>
			</SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-8">
        <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded">View All Products</Button>
      </div>
    </div>
  )
}