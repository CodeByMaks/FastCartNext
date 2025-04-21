"use client"

import { Mail, Send } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = pathname.split('/')[1]

  return (
	<footer className="bg-black text-white w-full py-8 px-4">
	<div className="w-[90%] container mx-auto">
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
		 <div className="space-y-5">
			<h3 className="text-lg font-semibold">{t('Exclusive')}</h3>
			<p>{t('Subscribe')}</p>
			<p className="text-sm">{t('GetDiscount')}</p>
			<div className="flex items-center relative">
			  <input
				 type="email"
				 placeholder={t('EnterEmail')}
				 className="bg-transparent border-2 border-white rounded-2xl
				  pl-2 pr-10 py-5 h-10 text-white placeholder:text-gray-400"
			  />
			  <button className="absolute right-5 text-white">
				 <Send size={16} />
			  </button>
			</div>
		 </div>

		 <div className="space-y-4">
			<h3 className="text-lg font-semibold">{t('Support')}</h3>
			<p className="text-sm">
			  {t('Address')}
			</p>
			<p className="text-sm flex items-center gap-2">
			  <Mail size={16} />
			  {t('Email')}
			</p>
			<p className="text-sm">{t('Phone')}</p>
		 </div>

		 <div className="space-y-4">
			<h3 className="text-lg font-semibold">{t('Account')}</h3>
			<ul className="space-y-5 text-sm">
			  <li>
				 <Link href={`/${locale}`}>{t('MyAccount')}</Link>
			  </li>
			  <li>
				 <Link href={`/${locale}`}>{t('Cart')}</Link>
			  </li>
			  <li>
				 <Link href={`/${locale}`}>{t('Wishlist')}</Link>
			  </li>
			  <li>
				 <Link href={`/${locale}`}>{t('Shop')}</Link>
			  </li>
			</ul>
		 </div>

		 <div className="space-y-4">
			<h3 className="text-lg font-semibold">{t('QuickLink')}</h3>
			<ul className="space-y-5 text-sm">
			  <li>
				 <Link href={`/${locale}`}>{t('PrivacyPolicy')}</Link>
			  </li>
			  <li>
				 <Link href={`/${locale}`}>{t('TermsOfUse')}</Link>
			  </li>
			  <li>
				 <Link href={`/${locale}`}>{t('FAQ')}</Link>
			  </li>
			  <li>
				 <Link href={`/${locale}`}>{t('Contact')}</Link>
			  </li>
			</ul>
		 </div>

		 {/* Social Column */}
		 <div className="space-y-4">
			<h3 className="text-lg font-semibold">{t('Social')}</h3>
			<div className="flex gap-4">
			  <Link href="#" aria-label="Facebook">
				 <svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="size-5"
				 >
					<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
				 </svg>
			  </Link>
			  <Link href="#" aria-label="Twitter">
				 <svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="size-5"
				 >
					<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
				 </svg>
			  </Link>
			  <Link href="#" aria-label="Instagram">
				 <svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="size-5"
				 >
					<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
					<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
					<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
				 </svg>
			  </Link>
			  <Link href="#" aria-label="LinkedIn">
				 <svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="size-5"
				 >
					<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
					<rect width="4" height="12" x="2" y="9"></rect>
					<circle cx="4" cy="4" r="2"></circle>
				 </svg>
			  </Link>
			</div>
		 </div>
	  </div>

	  <div className="mt-12 text-center border-t border-gray-800 pt-5 text-sm text-gray-600">
		 <p>{t('Copyright')}</p>
	  </div>
	</div>
 </footer>
  )
}

export default Footer