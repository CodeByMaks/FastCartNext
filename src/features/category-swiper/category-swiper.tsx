/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Swiper as SwiperType } from "swiper"
import { useRef } from "react"
import "swiper/css"
import { useGetCategoriesQuery } from '@/entities/category/categoryApi'

export default function CategorySwiper() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  const {data, error, isLoading} = useGetCategoriesQuery(undefined)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading categories</div>


  return (
    <div className="w-[85%] container mx-auto px-4 py-18">
      <div className="flex items-center justify-between mb-6">
        <div>
		  <div className="mb-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-2 bg-red-500"></div>
          <span className="text-red-500 font-medium">Categories</span>
        </div>
      </div>
          <h2 className="text-3xl font-bold">Browse By Category</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={6}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        className="relative"
      >
        {data?.data?.map((category) => (
          <SwiperSlide key={category.id}>
            <div
              className={`
                flex flex-col text-center items-center justify-center h-[150px] p-8 border rounded-lg transition-all duration-300 cursor-pointer
                ${activeIndex === category.id ? "bg-red-500 text-white" : "bg-white hover:border-red-500"}
              `}
              onMouseEnter={() => setActiveIndex(category.id)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={`w-12 h-12 mb-4 ${activeIndex === category.id ? "text-white" : "text-gray-800"}`}>
                <img src={`https://store-api.softclub.tj/images/${category.categoryImage}`} alt={category.categoryName} />
              </div>
              <span className="font-medium">{category.categoryName}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
