'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/assets/Group 1116606595.png';
import { Heart, Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { LanguageSelect } from '@/features/language-switcher/LanguageSelect';
import { useState, useEffect } from 'react';

export const Header = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b-2 relative">
      <div className='w-[90%] md:w-[85%] m-auto flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          {/* Бургер меню - рендерим только на клиенте */}
          {isMounted && (
            <button 
              onClick={toggleMenu}
              className='md:hidden flex items-center justify-center'
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
          
          <div className='w-32 md:w-auto'>
            <Image src={logo} alt='' layout='responsive'  />
          </div>
        </div>

        {/* Мобильное меню - рендерим только на клиенте */}
        {isMounted && isMenuOpen && (
          <div className='md:hidden absolute top-full left-0 w-full bg-white z-50 py-4 px-6 border-b-2 shadow-md'>
            <nav className="flex flex-col gap-4 text-[16px] mb-4">
              <Link href={`/${locale}`} onClick={toggleMenu}>{t('Home')}</Link>
              <Link href={`/${locale}/contact`} onClick={toggleMenu}>{t('Contact')}</Link>
              <Link href={`/${locale}/about`} onClick={toggleMenu}>{t('About')}</Link>
              <Link href={`/${locale}/signup`} onClick={toggleMenu}>{t('SignUp')}</Link>
            </nav>
          </div>
        )}

        <nav className="hidden md:flex gap-6 lg:gap-10 text-[14px] lg:text-[16px]">
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
            <input className='px-3 outline-0 w-20 md:w-auto bg-transparent' type="text" />
            <Search size={18} className='flex-shrink-0' />
          </div>
          <div className='flex gap-2 sm:gap-4'>
            <Heart size={20} className='flex-shrink-0' />
            <ShoppingCart size={20} className='flex-shrink-0' />
            <Link href={`/${locale}/profile`}>
              <User size={20} className='flex-shrink-0 cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};