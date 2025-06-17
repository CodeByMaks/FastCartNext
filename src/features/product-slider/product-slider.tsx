"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/legacy/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useGetCategoriesQuery } from '@/entities/category/categoryApi'
import iphone from "@/assets/hero_endframe__cvklg0xk3w6e_large 2.png"
import ps from "@/assets/ps5.jpg"
import rogphone from '@/assets/rogphone.jpg'
import iphoone from '@/assets/iphoone.jpg'

const slides = [
  {
    id: 1,
    title: "iPhone 14 Series",
    description: "Up to 10% off Voucher",
    image: iphone,
    buttonText: "Shop Now",
    buttonLink: "#",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Samsung Galaxy",
    description: "Special Offer 15% off",
    image: ps,
    buttonText: "Shop Now",
    buttonLink: "#",
    bgColor: "bg-blue-900",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Pixel Phones",
    description: "New Arrivals 20% off",
    image: rogphone,
    buttonText: "Discover",
    buttonLink: "#",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "Accessories",
    description: "Premium Selection",
    image: iphoone,
    buttonText: "View All",
    buttonLink: "#",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: 5,
    title: "Special Deals",
    description: "Limited Time Offers",
    image: ps,
    buttonText: "Get Deals",
    buttonLink: "#",
    bgColor: "bg-blue-900",
    textColor: "text-white",
  },
]


export function ProductSlider() {
  const {data, isLoading, error} = useGetCategoriesQuery()
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Auto-transition every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(timer)
  }, [nextSlide])


  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading categories</div>
  
  return (
    <div className="flex gap-10 flex-col md:flex-row w-full max-w-[85%] mx-auto my-10 rounded-md overflow-hidden">
      {/* Sidebar Categories */}
      <div className="w-full h-[400px] overflow-y-auto md:w-1/5 bg-white border-r border-gray-200">
        <ul className="divide-y divide-gray-200">
          {data?.data?.map((category) => (
            <li key={category.id} className="py-3 px-4 hover:bg-gray-50">
              <Link href="#" className="flex justify-between items-center text-sm">
                {category.categoryName}
                {category.hasSubmenu && <ChevronRight className="h-4 w-4" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Slider */}
      <div className="relative w-full md:w-4/5 h-[300px] md:h-[400px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${slide.bgColor} ${slide.textColor}`}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-medium mb-2">{slide.title}</h2>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">{slide.description}</h3>
                <Link href={slide.buttonLink} className="flex items-center text-sm font-medium w-fit">
                  {slide.buttonText}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                <div className="relative w-full h-[200px] md:h-[300px]">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
