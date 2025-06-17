'use client'
import logo from '@/assets/Group 1116606595.png'
import { LanguageSelect } from '@/widgets/language-switcher/LanguageSelect'
import {
  Heart,
  LogOut,
  Menu,
  PackageCheck,
  Search,
  ShoppingCart,
  User,
  X,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from "next/legacy/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Header = () => {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = pathname.split('/')[1]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [wishlistCount, setWishlistCount] = useState(0)

  // Функция для обновления счетчика
  const updateWishlistCount = () => {
    try {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
      setWishlistCount(wishlist.length)
    } catch (error) {
      console.error("Error reading wishlist:", error)
    }
  }

  useEffect(() => {
    setIsMounted(true) 
    // Initial load
    updateWishlistCount()

    // Слушаем изменения в localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'wishlist') {
        updateWishlistCount()
      }
    }

    // Создаем кастомное событие для отслеживания изменений в текущей вкладке
    const handleCustomWishlistChange = () => {
      updateWishlistCount()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('wishlistChanged', handleCustomWishlistChange)

    // Проверяем изменения каждые 500мс (опционально)
    const interval = setInterval(updateWishlistCount, 500)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('wishlistChanged', handleCustomWishlistChange)
      clearInterval(interval)
    }
  }, [])

  // Остальной код остается без изменений...
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.user-menu') && !target.closest('.user-icon')) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='py-4 border-b-2 relative'>
      <div className='w-[90%] md:w-[85%] m-auto flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          {isMounted && (
            <button
              onClick={toggleMenu}
              className='md:hidden flex items-center justify-center'
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
          <div className='w-32 md:w-auto'>
            <Link href={`/${locale}`}>
              <Image src={logo} alt='Logo'  />
            </Link>
          </div>
        </div>

        {/* Mobile menu - unchanged */}
        {isMounted && isMenuOpen && (
          <div className='md:hidden absolute top-full left-0 w-full bg-white z-50 py-4 px-6 border-b-2 shadow-md'>
            <nav className='flex flex-col gap-4 text-[16px] mb-4'>
              <Link href={`/${locale}`} onClick={toggleMenu}>
                {t('Home')}
              </Link>
              <Link href={`/${locale}/contact`} onClick={toggleMenu}>
                {t('Contact')}
              </Link>
              <Link href={`/${locale}/about`} onClick={toggleMenu}>
                {t('About')}
              </Link>
              <Link href={`/${locale}/signup`} onClick={toggleMenu}>
                {t('SignUp')}
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop navigation - unchanged */}
        <nav className='hidden md:flex gap-6 lg:gap-10 text-[14px] lg:text-[16px]'>
          <Link href={`/${locale}`}>{t('Home')}</Link>
          <Link href={`/${locale}/contact`}>{t('Contact')}</Link>
          <Link href={`/${locale}/about`}>{t('About')}</Link>
          <Link href={`/${locale}/signup`}>{t('SignUp')}</Link>
        </nav>

        <div className='flex gap-2 sm:gap-4 items-center'>
          <div>
            <LanguageSelect />
          </div>

          <div className='hidden sm:flex items-center bg-[#F5F5F5] py-2 px-3 rounded-2xl'>
            <input
              className='px-3 outline-0 w-20 md:w-auto bg-transparent'
              type='text'
              placeholder='Search'
            />
            <Search size={18} className='flex-shrink-0' />
          </div>

          <div className='flex gap-2 sm:gap-4 items-center relative'>
            <Link href={`/${locale}/wishlist`} className='relative'>
              <Heart size={20} className='flex-shrink-0 cursor-pointer' />
              {wishlistCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href={`/${locale}/cart`}>
              <ShoppingCart size={20} className='flex-shrink-0 cursor-pointer' />
            </Link>
            <div className='relative'>
              <div
                className='user-icon rounded-full p-2 hover:bg-red-500 hover:text-white cursor-pointer'
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <User size={20} className='flex-shrink-0' />
              </div>

              {isUserMenuOpen && (
                <div className='user-menu absolute right-0 mt-2 w-44 bg-black text-white rounded-xl shadow-lg z-50 py-2 flex flex-col gap-1 text-sm'>
                  <Link
                    href={`/${locale}/profile`}
                    className='px-4 py-2 hover:bg-gray-800 flex items-center gap-2'
                  >
                    <User size={16} /> Account
                  </Link>
                  <Link
                    href={`/#`}
                    className='px-4 py-2 hover:bg-gray-800 flex items-center gap-2'
                  >
                    <PackageCheck size={16} /> My Order
                  </Link>
                  <button
                    className='px-4 py-2 hover:bg-gray-800 flex items-center gap-2 text-left'
                    onClick={() => {
                      console.log('Logout logic')
                    }}
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}