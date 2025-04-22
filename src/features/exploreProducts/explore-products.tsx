
import { useGetProductsQuery } from '@/entities/products/productsApi'
import { Button } from "@/shared/ui/button"
import ProductCard from '@/widgets/products/product-card'

export default function ExploreProducts() {
  const {data, isLoading, error} = useGetProductsQuery()
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error...</div>

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
        {data?.data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded">View All Products</Button>
      </div>
    </div>
  )
}
