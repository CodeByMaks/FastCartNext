/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { Separator } from "@/shared/ui/separator"
import { Slider } from "@/shared/ui/slider"
import { Checkbox } from "@/shared/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Badge } from "@/shared/ui/badge"
import { useGetProductsQuery } from '@/entities/products/productsApi'

// Categories
const categories = [
  { id: "all", name: "All products" },
  { id: "electronics", name: "Electronics" },
  { id: "fashion", name: "Fashion & Lifestyle" },
  { id: "mobile", name: "Mobile & Tablets" },
  { id: "sports", name: "Sports & Outdoor" },
]

// Brands
const brands = [
  { id: "samsung", name: "Samsung" },
  { id: "apple", name: "Apple" },
  { id: "huawei", name: "Huawei" },
  { id: "poco", name: "Poco" },
  { id: "lenovo", name: "Lenovo" },
]

// Features
const features = [
  { id: "metallic", name: "Metallic" },
  { id: "plastic-cover", name: "Plastic cover" },
  { id: "8gb-ram", name: "8GB Ram" },
  { id: "super-power", name: "Super power" },
  { id: "large-memory", name: "Large Memory" },
]

export default function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [viewMore, setViewMore] = useState({
    categories: false,
    brands: false,
    features: false,
  })
  const { data, isLoading, error } = useGetProductsQuery(undefined)

  if (isLoading) return <div className="w-[85%] m-auto py-10 text-center">Loading products...</div>
  if (error) return <div className="w-[85%] m-auto py-10 text-center text-red-500">Error loading products</div>

  return (
    <div className="w-[85%] m-auto py-10 mb-28 flex flex-col md:flex-row gap-6">
      {/* Sidebar filters */}
      <div className="w-full md:w-64 shrink-0">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium">Category</h2>
            <button
              className="text-xs text-gray-500"
              onClick={() => setViewMore({ ...viewMore, categories: !viewMore.categories })}
            >
              {viewMore.categories ? "See less" : "See all"}
            </button>
          </div>
          <div className="space-y-2">
            {categories.slice(0, viewMore.categories ? categories.length : 5).map((category) => (
              <div key={category.id} className="flex items-center gap-2">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={selectedCategory === category.id}
                  onCheckedChange={() => setSelectedCategory(category.id)}
                />
                <label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                  {category.name}
                </label>
              </div>
            ))}
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium">Brands</h2>
              <button
                className="text-xs text-gray-500"
                onClick={() => setViewMore({ ...viewMore, brands: !viewMore.brands })}
              >
                {viewMore.brands ? "See less" : "See all"}
              </button>
            </div>
            <div className="space-y-2">
              {brands.slice(0, viewMore.brands ? brands.length : 5).map((brand) => (
                <div key={brand.id} className="flex items-center gap-2">
                  <Checkbox id={`brand-${brand.id}`} />
                  <label htmlFor={`brand-${brand.id}`} className="text-sm cursor-pointer">
                    {brand.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium">Features</h2>
              <button
                className="text-xs text-gray-500"
                onClick={() => setViewMore({ ...viewMore, features: !viewMore.features })}
              >
                {viewMore.features ? "See less" : "See all"}
              </button>
            </div>
            <div className="space-y-2">
              {features.slice(0, viewMore.features ? features.length : 5).map((feature) => (
                <div key={feature.id} className="flex items-center gap-2">
                  <Checkbox id={`feature-${feature.id}`} />
                  <label htmlFor={`feature-${feature.id}`} className="text-sm cursor-pointer">
                    {feature.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-sm font-medium">Price range</h2>
            <Slider
              defaultValue={[0, 1000]}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="py-4"
            />
            <div className="flex items-center justify-between">
              <div className="border rounded px-3 py-1.5 text-sm">${priceRange[0]}</div>
              <div className="border rounded px-3 py-1.5 text-sm">${priceRange[1]}</div>
            </div>
            <Button className="w-full" variant="outline">
              Apply
            </Button>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-sm font-medium">Condition</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox id="condition-any" />
                <label htmlFor="condition-any" className="text-sm cursor-pointer">
                  Any
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="condition-refurbished" />
                <label htmlFor="condition-refurbished" className="text-sm cursor-pointer">
                  Refurbished
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="condition-brand-new" />
                <label htmlFor="condition-brand-new" className="text-sm cursor-pointer">
                  Brand new
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="condition-old-items" />
                <label htmlFor="condition-old-items" className="text-sm cursor-pointer">
                  Old items
                </label>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-sm font-medium">Ratings</h2>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <Checkbox id={`rating-${rating}`} />
                  <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1">{rating === 5 ? "" : "& up"}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="flex-1">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Explore Our Products</span>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="popularity">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.data?.products?.map((product) => (
              <div
                key={product.id}
                className="group relative border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square bg-gray-100">
                  <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
                    <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
                      <ShoppingCart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {product.isNew && (
                    <Badge className="absolute top-2 left-2 z-10 bg-green-500 hover:bg-green-600">New</Badge>
                  )}

                  {product.isSale && (
                    <Badge className="absolute top-2 left-2 z-10 bg-red-500 hover:bg-red-600">Sale</Badge>
                  )}

                  <img
                    src={`https://store-api.softclub.tj/images/${product.image}`}
                    alt={product.productName}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-sm">{product.productName}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                  </div>

                  {product.colors?.length > 0 && (
                    <div className="flex items-center gap-1 mt-3">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="secondary" className="px-8">
              View More Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}