"use client"

import ProfileForm from "@/features/profile/profile-form"
import Link from 'next/link'

export default function AccountPage() {
  return (
    <div className="w-[85%] m-auto container mx-auto py-14 pb-28">
		  <nav className="flex items-center mb-12 text-sm">
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium">About</span>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <h2 className="text-lg font-medium mb-4">Manage My Account</h2>
          <nav className="space-y-1">
            <a href="#" className="block py-2 text-red-500">
              My Profile
            </a>
            <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">
              Address Book
            </a>
            <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">
              My Payment Options
            </a>
          </nav>

          <h2 className="text-lg font-medium mt-6 mb-4">My Orders</h2>
          <nav className="space-y-1">
            <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">
              My Returns
            </a>
            <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">
              My Cancellations
            </a>
          </nav>

          <h2 className="text-lg font-medium mt-6 mb-4">My WishList</h2>
        </div>

        <div className="md:col-span-3">
          <ProfileForm />
        </div>
      </div>
    </div>
  )
}
