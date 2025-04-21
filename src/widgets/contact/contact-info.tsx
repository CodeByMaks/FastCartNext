'use client'

import { Card, CardContent } from '@/shared/ui/card'
import { Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ContactInfo() {
	const t = useTranslations('ContactPage')

	return (
		<Card className='shadow-xl'>
			<CardContent className='p-6 space-y-6'>
				<div className='space-y-4'>
					<div className='flex items-center gap-3'>
						<div className='bg-red-500 rounded-full p-2'>
							<Phone className='h-5 w-5 text-white' />
						</div>
						<h3 className='text-lg font-medium'>{t('CallToUs')}</h3>
					</div>
					<p className='text-gray-600'>{t('Available')}</p>
					<p className='text-gray-600'>{t('Phone')}</p>
				</div>

				<div className='h-px bg-gray-200 my-6' />

				<div className='space-y-4'>
					<div className='flex items-center gap-3'>
						<div className='bg-red-500 rounded-full p-2'>
							<Mail className='h-5 w-5 text-white' />
						</div>
						<h3 className='text-lg font-medium'>{t('WriteToUs')}</h3>
					</div>
					<p className='text-gray-600'>{t('FormInfo')}</p>
					<div className='space-y-1'>
						<p className='text-gray-600'>{t('CustomerEmail')}</p>
						<p className='text-gray-600'>{t('SupportEmail')}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}