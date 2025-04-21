
import { Button } from "@/shared/ui/button"
import ProductCard from '@/widgets/products/product-card'

export default function ExploreProducts() {
  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: 100,
      rating: 4,
      reviews: 39,
      image: "/placeholder.svg?height=200&width=200",
      isNew: false,
      colors: ["#FF0000", "#FF6B6B"],
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: 360,
      rating: 4,
      reviews: 95,
      image: "/placeholder.svg?height=200&width=200",
      isNew: false,
      addToCart: true,
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 5,
      reviews: 325,
      image: "/placeholder.svg?height=200&width=200",
      isNew: false,
    },
    {
      id: 4,
      name: "Curology Product Set",
      price: 500,
      rating: 4,
      reviews: 145,
      image: "/placeholder.svg?height=200&width=200",
      isNew: false,
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: 360,
      rating: 5,
      reviews: 65,
      image: "/placeholder.svg?height=200&width=200",
      isNew: true,
      colors: ["#FF0000", "#FF6B6B"],
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: 160,
      rating: 4,
      reviews: 30,
      image: "/placeholder.svg?height=200&width=200",
      isNew: false,
      colors: ["#FF0000", "#00FF00"],
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: 560,
      rating: 5,
      reviews: 55,
      image: "/placeholder.svg?height=200&width=200",
      isNew: true,
      colors: ["#000000", "#FF0000"],
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: 560,
      rating: 5,
      reviews: 56,
      image: "/placeholder.svg?height=200&width=200",
      isNew: false,
      colors: ["#000000", "#FF6B6B"],
    },
  ]

  return (
    <div className="container w-[85%] mx-auto px-4 py-8">
      <div className="mb-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-2 bg-red-500"></div>
          <span className="text-red-500 font-medium">Our Products</span>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-8">Explore Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded">View All Products</Button>
      </div>
    </div>
  )
}
