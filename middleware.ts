// import { i18n } from '~/i18n';
import createIntlMiddleware from 'next-intl/middleware'

export default createIntlMiddleware({
  locales: ['en', 'zh-CN'],
  defaultLocale: 'en'
})
//  '/((?!api|_next/static|_next/image|favicon.ico).*)',
export const config = {
  matcher: ['/((?!api|_next|_vercel|favicon.ico|studio).*)']
}
