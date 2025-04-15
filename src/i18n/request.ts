import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/shared/lib/i18n';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`@/shared/lib/i18n/messages/${locale}.json`)).default
  };
}); 