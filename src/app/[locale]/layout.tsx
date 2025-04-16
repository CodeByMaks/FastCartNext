import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import { locales, type Locale } from '@/shared/lib/i18n'
import { Header } from '@/widgets/header/ui/Header'
import en from '@/shared/lib/i18n/messages/en.json'
import ru from '@/shared/lib/i18n/messages/ru.json'
import tj from '@/shared/lib/i18n/messages/tj.json'
import '@/app/globals.css'
import Footer from '@/widgets/footer/ui/Footer'

const messagesMap = { en, ru, tj }

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as Locale)) notFound()

  const typedLocale = locale as Locale
  const messages = messagesMap[typedLocale]

  return (
    <html lang={typedLocale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>FastCart</title>
      </head>
      <body className="antialiased min-h-screen">
        <NextIntlClientProvider locale={typedLocale} messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
