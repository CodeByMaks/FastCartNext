/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Heart, Eye } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/utils"

export default function ProductCard({product}) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden group">
      <div className="relative p-4">
        {product.isNew && (
          <span className="absolute top-6 left-6 bg-green-500 text-white text-xs px-2 py-1 rounded z-10">NEW</span>
        )}

        <div className="relative">
          <img
            src={`https://store-api.softclub.tj/images/${product.image}`}
            alt={product.productName}
            width={200}
            height={200}
            className="mx-auto object-contain h-40 w-full"
          />

          <div className="absolute top-0 right-0 flex flex-col gap-2">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <Heart className={cn("h-5 w-5", isWishlisted ? "fill-red-500 stroke-red-500" : "stroke-gray-500")} />
            </button>

            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <Eye className="h-5 w-5 stroke-gray-500" />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-none">Add To Cart</Button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-sm mb-1">{product.productName}</h3>
        <div className="flex justify-between items-center mb-2">
          <div className='flex gap-3'>
          <span className="text-red-500 font-bold">${product.discountPrice}</span>
          <span className="text-gray-400 line-through font-bold">${product.price}</span>
          </div>
          <div className="flex items-center">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="orange"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">38</span>
          </div>
        </div>
      </div>
    </div>
  )
}
