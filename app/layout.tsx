import 'tailwindcss/tailwind.css'
import '~/styles/globals.css'
import '~/styles/iconfont.css'
import '~/styles/clerk.css'
import '~/styles/prism.css'

import { Background } from '~/components/Background'
import Header from '~/components/Header'
import { SayHi } from '~/components/Hello'
import AppNextUIProvider from '~/providers/NextUIProvider'
import { ThemeProvider } from '~/providers/ThemeProvider'
import { Analytics } from '@vercel/analytics/react'

interface RootLayoutProps {
  children: React.ReactNode
  params: RootParams
}

export async function generateMetadata({ params }: { params: RootParams }) {
  return {
    title: 'LRboyz',
    icons: {
      icon: '/favicon/favicon-32x32.png'
      // shortcut: '/favicon.ico'
      // apple: '/favicon/apple-touch-icon.png'
    }
  }
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={`min-h-screen`}>
        <Background />
        <SayHi />
        <AppNextUIProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <div className='relative '>
              <Header />
              <main className='pt-[60px] w-[1050px] justify-between mx-auto flex'>{children}</main>
            </div>
          </ThemeProvider>
          <Analytics />
        </AppNextUIProvider>
      </body>
    </html>
    // <ClerkProvider localization={zhCN}>

    // </ClerkProvider>
  )
}
