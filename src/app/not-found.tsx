'use client'
import { Button } from '@/shared/ui/button'
import { useRouter } from 'next/navigation'
import './globals.css'

const NotFound = () => {
	const navigate = useRouter()

	const handleClick = () => {
		return navigate.push('/')
	}

	return (
		<div className='w-full h-[100vh] flex flex-col gap-5 justify-center items-center'>
			<h1 className='text-[110px] font-bold'>404 Not Found</h1>
			<p className='text-xl'>
				Your visited page not found. You may go home page.
			</p>
			<Button onClick={handleClick} className='py-6 px-9' variant={'default'}>
				Back to home page
			</Button>
		</div>
	)
}

export default NotFound
