import { Button } from '@/shared/ui/button'
import ProductCard from '@/widgets/products/product-card'

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
	}
]

export const BestProducts = () => {
  return (
	 <section className='w-[85%] m-auto py-10'>
		<div className="mb-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-2 bg-red-500"></div>
          <span className="text-red-500 font-medium">This Month</span>
        </div>
      </div>

		<div className='flex items-center justify-between'>
			<h2 className='text-3xl font-bold'>Best Selling Products</h2>
			<Button>View All</Button>
		</div>

		<div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				  {products.map((product) => (
					 <ProductCard key={product.id} product={product} />
				  ))}
				</div>
	 </section>
  )
}