'use client'

import type React from 'react'
import { Button } from '@/shared/ui/button'
import { Card, CardContent } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function ContactForm() {
	const t = useTranslations('ContactPage')
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Form submitted:', formData)
		setFormData({ name: '', email: '', phone: '', message: '' })
		alert(t('MessageSent'))
	}

	return (
		<Card className='shadow-xl'>
			<CardContent className='p-6'>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						<Input
							name='name'
							placeholder={t('Name')}
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<Input
							name='email'
							type='email'
							placeholder={t('Email')}
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<Input
							name='phone'
							type='tel'
							placeholder={t('PhoneInput')}
							value={formData.phone}
							onChange={handleChange}
							required
						/>
					</div>

					<Textarea
						name='message'
						placeholder={t('Message')}
						className='min-h-[150px]'
						value={formData.message}
						onChange={handleChange}
						required
					/>

					<div className='flex justify-end'>
						<Button
							type='submit'
							className='bg-red-500 hover:bg-red-600 text-white px-6'
						>
							{t('SendMessage')}
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	)
}