'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales } from '@/shared/lib/i18n';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

export const LanguageSelect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale; // заменяем локаль
    router.push(segments.join('/'));
  };

  return (
    <Select onValueChange={handleChange} defaultValue={locale}>
      <SelectTrigger className="w-[70px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent className='min-w-[70px]'>
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {loc.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
