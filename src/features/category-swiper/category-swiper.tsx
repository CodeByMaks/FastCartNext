"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Swiper as SwiperType } from "swiper"
import { useRef } from "react"

// Import Swiper styles
import "swiper/css"

export default function CategorySwiper() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  const categories = [
    {
      name: "Phones",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.5 2H7.5C6.67157 2 6 2.67157 6 3.5V20.5C6 21.3284 6.67157 22 7.5 22H16.5C17.3284 22 18 21.3284 18 20.5V3.5C18 2.67157 17.3284 2 16.5 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 18H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Computers",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 14H4V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V14Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 17H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M2 14H22V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V14Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "SmartWatch",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 9V6.5C16 5.83696 15.7366 5.20107 15.2678 4.73223C14.7989 4.26339 14.163 4 13.5 4H10.5C9.83696 4 9.20107 4.26339 8.73223 4.73223C8.26339 5.20107 8 5.83696 8 6.5V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 15V17.5C8 18.163 8.26339 18.7989 8.73223 19.2678C9.20107 19.7366 9.83696 20 10.5 20H13.5C14.163 20 14.7989 19.7366 15.2678 19.2678C15.7366 18.7989 16 18.163 16 17.5V15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="6"
            y="9"
            width="12"
            height="6"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Camera",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.5 4H9.5L7 7H4C3.46957 7 2.96086 7.21071 2.58579 7.58579C2.21071 7.96086 2 8.46957 2 9V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H17L14.5 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "HeadPhones",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 14H5C5.53043 14 6.03914 14.2107 6.41421 14.5858C6.78929 14.9609 7 15.4696 7 16V19C7 19.5304 6.78929 20.0391 6.41421 20.4142C6.03914 20.7893 5.53043 21 5 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V16C1 15.4696 1.21071 14.9609 1.58579 14.5858C1.96086 14.2107 2.46957 14 3 14Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 14H19C18.4696 14 17.9609 14.2107 17.5858 14.5858C17.2107 14.9609 17 15.4696 17 16V19C17 19.5304 17.2107 20.0391 17.5858 20.4142C17.9609 20.7893 18.4696 21 19 21H21C21.5304 21 22.0391 20.7893 22.4142 20.4142C22.7893 20.0391 23 19.5304 23 19V16C23 15.4696 22.7893 14.9609 22.4142 14.5858C22.0391 14.2107 21.5304 14 21 14Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 16V12C1 9.61305 1.94821 7.32387 3.63604 5.63604C5.32387 3.94821 7.61305 3 10 3H14C16.3869 3 18.6761 3.94821 20.364 5.63604C22.0518 7.32387 23 9.61305 23 12V16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Gaming",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 13H15.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 11H18.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M17.32 5H6.68C5.69028 5.00077 4.73579 5.36725 4.00103 6.03398C3.26628 6.70072 2.80345 7.61954 2.702 8.604L1.5 19.604C1.4466 20.1265 1.5285 20.6554 1.73786 21.1356C1.94722 21.6159 2.27664 22.0322 2.69552 22.3414C3.1144 22.6507 3.60625 22.8421 4.12121 22.8957C4.63617 22.9493 5.15508 22.8632 5.623 22.646L7.5 21.646C7.80901 21.4926 8.15273 21.4125 8.5 21.413H15.5C15.8473 21.4125 16.191 21.4926 16.5 21.646L18.377 22.646C18.8449 22.8632 19.3638 22.9493 19.8788 22.8957C20.3938 22.8421 20.8856 22.6507 21.3045 22.3414C21.7234 22.0322 22.0528 21.6159 22.2621 21.1356C22.4715 20.6554 22.5534 20.1265 22.5 19.604L21.298 8.604C21.1966 7.61954 20.7337 6.70072 19.999 6.03398C19.2642 5.36725 18.3097 5.00077 17.32 5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

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
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div
              className={`
                flex flex-col items-center justify-center p-8 border rounded-lg transition-all duration-300 cursor-pointer
                ${activeIndex === index ? "bg-red-500 text-white" : "bg-white hover:border-red-500"}
              `}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={`w-12 h-12 mb-4 ${activeIndex === index ? "text-white" : "text-gray-800"}`}>
                {category.icon}
              </div>
              <span className="font-medium">{category.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
