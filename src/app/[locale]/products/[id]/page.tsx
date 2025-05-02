/* eslint-disable @next/next/no-img-element */
'use client'
import { useGetProductByIdQuery } from '@/entities/productByID/productByIdApi'
import { useParams } from 'next/navigation'
import Link from "next/link"
import { Minus, Plus, Heart, Truck, RotateCcw } from 'lucide-react'
import React, { useState } from 'react'

import { Button } from "@/shared/ui/button"
import { Separator } from "@/shared/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { Label } from "@/shared/ui/label"
import { Input } from "@/shared/ui/input"

const page = () => {
	const params = useParams()
	const productId = Number(params.id)

	const [selectedSize, setSelectedSize] = useState("m")
	const [quantity, setQuantity] = useState(2)
	const [isFavorite, setIsFavorite] = useState(false)

	const {data, isLoading, error} = useGetProductByIdQuery(productId)

	if (isLoading) {
		return <div>Loading...</div>
	}
	if (error) {
		return <div>Error</div>
	}

   return (
		<div className="w-[85%] container mx-auto px-4 py-8 mb-28">
		  {/* Breadcrumbs */}
		  <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
			 <Link href="#" className="hover:underline">
				Account
			 </Link>
			 <span>/</span>
			 <Link href="#" className="hover:underline">
				Gaming
			 </Link>
			 <span>/</span>
			 <span className="text-foreground">Havic HV G-92 Gamepad</span>
		  </nav>
  
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			 {/* Product Images */}
			 <div className="flex flex-col md:flex-row gap-4">
				{/* Thumbnails */}
				<div className="flex md:flex-col gap-2 order-2 md:order-1">
				  {data?.data?.images?.map((i) => (
					 <div key={i} className="border rounded-md overflow-hidden w-20 h-20 cursor-pointer hover:border-primary">
						<img
						  src={`https://store-api.softclub.tj/images/${i.images}`}
						  alt={`Gamepad thumbnail ${i}`}
						  width={80}
						  height={80}
						  className="object-cover w-full h-full"
						/>
					 </div>
				  ))}
				</div>
  
				{/* Main Image */}
				<div className="border rounded-lg overflow-hidden order-1 md:order-2 flex-1">
				  <img
					 src={`https://store-api.softclub.tj/images/${data.data.images[0]?.images}`}
					 alt="Havic HV G-92 Gamepad"
					 width={500}
					 height={500}
					 className="object-contain w-full h-full"
				  />
				</div>
			 </div>
  
			 {/* Product Details */}
			 <div className="space-y-6">
				<div>
				  <h1 className="text-2xl font-bold">{data?.data?.productName}</h1>
				  <div className="flex items-center mt-2">
					 <div className="flex">
						{[1, 2, 3, 4].map((i) => (
						  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
							 <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
						  </svg>
						))}
						<svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
						  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
						</svg>
					 </div>
					 <span className="ml-2 text-sm text-muted-foreground">(150 Reviews)</span>
					 <span className="ml-4 text-sm text-green-500 font-medium">In Stock</span>
				  </div>
				</div>
  
				<div className="text-3xl font-bold">${data?.data?.price}</div>
  
				<p className="text-muted-foreground">
				{data?.data?.description}
				</p>
  
				<Separator />
  
				<div className="space-y-4">
				  <div>
					 <h3 className="font-medium mb-2">Colours:</h3>
					 <RadioGroup defaultValue="white" className="flex gap-2">
						<div className="flex items-center space-x-2">
						  <RadioGroupItem value="white" id="white" className="peer sr-only" />
						  <Label
							 htmlFor="white"
							 className="h-8 w-8 rounded-full border border-gray-200 bg-white peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-offset-2 peer-data-[state=checked]:ring-black cursor-pointer"
						  />
						</div>
						<div className="flex items-center space-x-2">
						  <RadioGroupItem value="red" id="red" className="peer sr-only" />
						  <Label
							 htmlFor="red"
							 className="h-8 w-8 rounded-full border border-gray-200 bg-red-500 peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-offset-2 peer-data-[state=checked]:ring-black cursor-pointer"
						  />
						</div>
					 </RadioGroup>
				  </div>
  
				  <div>
					 <h3 className="font-medium mb-2">Size:</h3>
					 <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
						{["xs", "s", "m", "l", "xl"].map((size) => (
						  <div key={size} className="flex items-center space-x-2">
							 <RadioGroupItem value={size} id={size} className="peer sr-only" />
							 <Label
								htmlFor={size}
								className={`h-10 w-10 flex items-center justify-center rounded-md border ${
								  size === selectedSize ? "bg-red-500 text-white" : "bg-white hover:bg-gray-100"
								} uppercase font-medium cursor-pointer peer-data-[state=checked]:bg-red-500 peer-data-[state=checked]:text-white`}
							 >
								{size}
							 </Label>
						  </div>
						))}
					 </RadioGroup>
				  </div>
  
				  <div className="flex items-center gap-4">
					 <div className="flex items-center border rounded-md">
						<Button
						  variant="ghost"
						  size="icon"
						  className="rounded-r-none h-10"
						  onClick={() => setQuantity(Math.max(1, quantity - 1))}
						>
						  <Minus className="h-4 w-4" />
						</Button>
						<Input
						  type="number"
						  min="1"
						  value={quantity}
						  onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
						  className="w-12 h-10 text-center border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
						/>
						<Button
						  variant="ghost"
						  size="icon"
						  className="rounded-l-none h-10"
						  onClick={() => setQuantity(quantity + 1)}
						>
						  <Plus className="h-4 w-4" />
						</Button>
					 </div>
  
					 <Button className="bg-red-500 hover:bg-red-600 text-white px-8">Buy Now</Button>
  
					 <Button variant="outline" size="icon" className="rounded-md" onClick={() => setIsFavorite(!isFavorite)}>
						<Heart className={`h-5 w-5 ${isFavorite ? "fill-current text-red-500" : ""}`} />
					 </Button>
				  </div>
				</div>
  
				<div className="space-y-4 pt-4">
				  <div className="border rounded-md p-4">
					 <div className="flex items-center gap-3">
						<Truck className="h-6 w-6" />
						<div>
						  <h3 className="font-medium">Free Delivery</h3>
						  <p className="text-sm text-muted-foreground">Enter your postal code for Delivery Availability</p>
						</div>
					 </div>
				  </div>
  
				  <div className="border rounded-md p-4">
					 <div className="flex items-center gap-3">
						<RotateCcw className="h-6 w-6" />
						<div>
						  <h3 className="font-medium">Return Delivery</h3>
						  <p className="text-sm text-muted-foreground">Free 30 Days Delivery Returns. Details</p>
						</div>
					 </div>
				  </div>
				</div>
			 </div>
		  </div>
		</div>
	 )
}

export default page