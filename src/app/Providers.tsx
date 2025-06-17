/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'

export function Providers({
  children,
  locale,
  messages,
}: {
  children: ReactNode
  locale: string
  messages: any
}) {
  return (
    <Provider store={store}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </Provider>
  )
}