import Image from "next/image"
import Link from "next/link"
import TeamSection from "@/shared/ui/team-section"
import group from '@/assets/Side Image.png'

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Navigation */}
      <nav className="flex items-center mb-12 text-sm">
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium">About</span>
      </nav>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold">Our Story</h1>
          <div className="space-y-4 text-[19px] text-gray-600">
            <p>
              Launched in 2015, Exclusive is South Asia`s premier online shopping marketplace with an active presence in
              Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has
              10,500 sellers and 300 brands and serves 3 million+ customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products in offer, growing at a very fast. Exclusive offers a diverse
              assortment in categories ranging from consumer.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-80 md:h-96">
            <Image
              src={group}
              alt="Team members"
              fill
              className="object-cover rounded-md bg-pink-400"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        <div className="border shadow-xl rounded-md p-6 flex flex-col items-center justify-center text-center">
          <div className="bg-gray-100 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <div className="text-2xl font-bold">10.5k</div>
          <div className="text-[18px] text-gray-500">Orders online per day</div>
        </div>

        <div className="border shadow-xl rounded-md p-6 flex flex-col items-center justify-center text-center bg-red-500 text-white">
          <div className="bg-red-400 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-2xl font-bold">33k</div>
          <div className="text-[18px]">Monthly marketplace sale</div>
        </div>

        <div className="border shadow-xl rounded-md p-6 flex flex-col items-center justify-center text-center">
          <div className="bg-gray-100 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </div>
          <div className="text-2xl font-bold">45.5k</div>
          <div className="text-[18px] text-gray-500">Customer reviews in our site</div>
        </div>

        <div className="border shadow-xl rounded-md p-6 flex flex-col items-center justify-center text-center">
          <div className="bg-gray-100 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <div className="text-2xl font-bold">25k</div>
          <div className="text-[18px] text-gray-500">Annual guests visit in our site</div>
        </div>
      </div>

      {/* Team Section with Pagination */}
      <TeamSection />

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </div>
  )
}
