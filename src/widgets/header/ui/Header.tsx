'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import logo from '@/assets/Group 1116606595.png'
import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import { LanguageSelect } from '@/features/language-switcher/LanguageSelect'

export const Header = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <header className="py-4 border-b-2">
      <div className='w-[85%] m-auto flex justify-between items-center'>
        <Image src={logo} alt ='' />
        <nav className="flex gap-10 text-[18px]">
          <Link href={`/${locale}`}>{t('Home')}</Link>
          <Link href={`/${locale}/contact`}>{t('Contact')}</Link>
          <Link href={`/${locale}/about`}>{t('About')}</Link>
          <Link href={`/${locale}/signup`}>{t('SignUp')}</Link>
        </nav>
        <div className='flex gap-4 items-center'>
          <LanguageSelect />
          <div className='flex items-center bg-[#F5F5F5] py-2 px-3 rounded-2xl'>
            <input className='px-3 outline-0' type="text" />
            <Search />
          </div>
          <Heart />
          <ShoppingCart />
          <User />
        </div>
      </div>
    </header>
  );
};
