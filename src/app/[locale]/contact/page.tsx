import ContactForm from '@/features/contact/contact-form'
import ContactInfo from '@/features/contact/contact-info'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function ContactPage() {
	const t = useTranslations('ContactPage')

	return (
		<main className='container mx-auto px-4 py-8'>
			<nav className='w-[85%] m-auto flex items-center gap-2 text-sm mb-8'>
				<Link href='/' className='text-gray-500 hover:text-gray-700'>
					{t('Home')}
				</Link>
				<span className='text-gray-500'>/</span>
				<span>{t('Contact')}</span>
			</nav>
			<div className='w-[85%] m-auto grid md:grid-cols-[1fr_2fr] gap-8 mb-28'>
				<ContactInfo />
				<ContactForm />
			</div>
		</main>
	)
}