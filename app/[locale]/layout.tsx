import 'tailwindcss/tailwind.css'
import '~/styles/globals.css'
import type { Metadata } from 'next'

import { notFound } from 'next/navigation'
import IntlProvider from '~/providers/IntlProvider'
import { ThemeProvider } from '~/providers/ThemeProvider'
import { Background } from '~/components/Background'
import Header from '../../components/Header'
import { AnalyticsWrapper } from '../../components/Analytics'

import AppNextUIProvider from '~/providers/NextUIProvider'

// const fontSansEn = Manrope({
//   weight: ['400', '500', '700'],
//   display: 'swap',
//   subsets: ['latin'],
//   variable: '--font-sans-en',
//   fallback: ['ui-sans-serif']
// })

// export function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ locale }));
// }

export async function generateMetadata({ params }: { params: RootParams }): Promise<Metadata> {
  return {
    title: 'LRboyz',
    icons: {
      icon: '/favicon/favicon-32x32.png',
      shortcut: '/favicon.ico'
      // apple: '/favicon/apple-touch-icon.png'
    }
  }
}

interface RootLayoutProps {
  children: React.ReactNode
  params: RootParams
}
export default async function RootLayout({ children, params }: RootLayoutProps) {
  let message
  try {
    message = (await import(`../../messages/${params.locale}`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={params.locale} suppressHydrationWarning className={``}>
      <body className='text-lgray dark:text-lgray dark:bg-stone-900  min-h-screen bg-grid'>
        <AppNextUIProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <IntlProvider locale={params.locale} messages={message}>
              <Background />
              <Header />
              <main className='h-full pt-[60px] md:mx-4 md:mt-0'>{children}</main>
            </IntlProvider>
          </ThemeProvider>

          <AnalyticsWrapper />
        </AppNextUIProvider>
      </body>
    </html>
  )
}
