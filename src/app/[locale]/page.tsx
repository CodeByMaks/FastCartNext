'use client';

import { BestProducts } from '@/features/best-products/best-products'
import CategorySwiper from '@/features/category-swiper/category-swiper'
import ExploreProducts from '@/features/exploreProducts/explore-products'
import FlashSales from '@/features/flash-sales/flash-sales'
import SpeakerPromo from '@/features/speaker-promo/speaker-promo'
import NewArrivalSection from '@/widgets/home/new-arrival-section'

export default function Home() {
  return (
    <>
      <section>
          
      </section>

      <FlashSales />

      <CategorySwiper />

      <BestProducts />

      <SpeakerPromo />

      <ExploreProducts />

      <NewArrivalSection />
    
      <section>
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">FREE AND FAST DELIVERY</h3>
          <p className="text-sm text-gray-500">Free delivery for all orders over $140</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm text-gray-500">Friendly 24/7 customer support</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">MONEY BACK GUARANTEE</h3>
          <p className="text-sm text-gray-500">We return money within 30 days</p>
        </div>
      </div>
      </section>
    </>
  );
}
