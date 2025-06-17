/* eslint-disable @next/next/no-img-element */
'use client'

import {
	useAddProductToCartMutation,
	useGetCartProductsQuery,
} from '@/entities/cart/cartApi'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Eye, Heart } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Product {
	id: string
	productName: string
	price: number
	discountPrice: number
	isNew?: boolean
	image: string
	rating: number
}

export default function ProductCard({ product }: { product: Product }) {
	const [isWishlisted, setIsWishlisted] = useState(false)
	const [addProductToCart, { isLoading: isAddingToCart }] =
		useAddProductToCartMutation()
	const router = useRouter()
	const { refetch } = useGetCartProductsQuery(undefined)

	const pathname = usePathname()
	const locale = pathname.split('/')[1]

	// Check if product is in wishlist on component mount
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
			setIsWishlisted(wishlist.some((item: Product) => item.id === product.id))
		}
	}, [product.id])

	const addProduct = async (id: string) => {
		try {
			const result = await addProductToCart(id).unwrap()
			toast.success('Product added to cart!')
			refetch()
			console.log('Added to cart:', result)
		} catch (error: any) {
			console.error('Failed to add to cart:', error)
			toast.error(error.data?.message || 'Failed to add product to cart')

			// Если ошибка авторизации, перенаправляем на страницу входа
			if (error.status === 401) {
				router.push(`${locale}/login`)
			}
		}
	}

	// Toggle product in wishlist
	const toggleWishlist = () => {
		try {
			const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
			let updatedWishlist = [...wishlist]

			if (isWishlisted) {
				updatedWishlist = updatedWishlist.filter(item => item.id !== product.id)
			} else {
				updatedWishlist.push({
					id: product.id,
					productName: product.productName,
					price: product.price,
					discountPrice: product.discountPrice,
					image: product.image,
					rating: product.rating,
				})
			}

			localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
			setIsWishlisted(!isWishlisted)
		} catch (error) {
			console.error('Error updating wishlist:', error)
		}
	}

	return (
		<div className='bg-gray-50 rounded-lg overflow-hidden group'>
			<div className='relative p-4'>
				{product.isNew && (
					<span className='absolute top-6 left-6 bg-green-500 text-white text-xs px-2 py-1 rounded z-10'>
						NEW
					</span>
				)}

				<div className='relative'>
					<img
						src={`https://store-api.softclub.tj/images/${product.image}`}
						alt={product.productName}
						width={200}
						height={200}
						className='mx-auto object-contain h-40 w-full'
					/>

					<div className='absolute top-0 right-0 flex flex-col gap-2'>
						<button
							onClick={toggleWishlist}
							className='bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors'
						>
							<Heart
								className={cn(
									'h-5 w-5',
									isWishlisted
										? 'fill-red-500 stroke-red-500'
										: 'stroke-gray-500'
								)}
							/>
						</button>

						<button className='bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors'>
							<Eye className='h-5 w-5 stroke-gray-500' />
						</button>
					</div>

					<div className='absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity'>
						<Button
							onClick={e => {
								e.stopPropagation()
								addProduct(product.id)
							}}
							disabled={isAddingToCart}
							className='w-full py-2 rounded-none bg-black text-white hover:bg-black/90'
						>
							{isAddingToCart ? 'Adding...' : 'Add To Cart'}
						</Button>
					</div>
				</div>
			</div>

			<div className='p-4'>
				<h3 className='font-medium text-sm mb-1'>{product.productName}</h3>
				<div className='flex justify-between items-center mb-2'>
					<div className='flex gap-3'>
						<span className='text-red-500 font-bold'>
							${product.discountPrice}
						</span>
						<span className='text-gray-400 line-through font-bold'>
							${product.price}
						</span>
					</div>
					<div className='flex items-center'>
						<div className='flex'>
							{Array.from({ length: 5 }).map((_, i) => (
								<svg
									key={i}
									className={`w-4 h-4 ${
										i < product.rating ? 'text-yellow-400' : 'text-gray-300'
									}`}
									fill='orange'
									viewBox='0 0 20 20'
								>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
							))}
						</div>
						<span className='text-xs text-gray-500 ml-1'>38</span>
					</div>
				</div>
			</div>
		</div>
	)
}
