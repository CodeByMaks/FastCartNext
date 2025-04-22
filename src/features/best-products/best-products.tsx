import { useGetProductsQuery } from '@/entities/products/productsApi'
import { Button } from '@/shared/ui/button'
import ProductCard from '@/widgets/products/product-card'


export const BestProducts = () => {
	const {data, isLoading, error} = useGetProductsQuery()
	if(isLoading) return <h1>Is loading</h1>
	if(error) return <h1>Error</h1>
	
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
				  {data?.data?.products.slice(0, 4).map((product) => (
					 <ProductCard key={product.id} product={product} />
				  ))}
				</div>
	 </section>
  )
}