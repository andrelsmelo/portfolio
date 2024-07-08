import { Lato } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
})
interface LayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export const metadata: Metadata = {
  title: 'André Melo',
  description: 'Portfólio de André Melo',
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={cn('antialiased', lato.className)}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
