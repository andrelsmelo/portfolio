import createMiddleware from 'next-intl/middleware'
import { localePrefix, defaultLocale, locales, pathnames } from './config'

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
})

export const config = {
  matcher: ['/', '/(es|en|pt-BR)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
