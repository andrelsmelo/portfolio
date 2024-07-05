import { Lato } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'
import './globals.css'
import { Metadata } from 'next'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
})
interface LayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'André Melo',
  description: 'Portfólio de André Melo',
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={cn('antialiased', lato.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
