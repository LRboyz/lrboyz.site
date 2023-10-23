import 'tailwindcss/tailwind.css'
import '~/styles/globals.css'
import '~/styles/iconfont.css'
import '~/styles/clerk.css'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import IntlProvider from '~/providers/IntlProvider'
import { ThemeProvider } from '~/providers/ThemeProvider'
import { Background } from '~/components/Background'
import AppNextUIProvider from '~/providers/NextUIProvider'
import { SayHi } from '~/components/Hello'
import Header from '~/components/Header'
import { Nav } from '~/components/Nav'
import Sidebar from '~/components/Sidebar'
import { ClerkProvider } from '@clerk/nextjs'
import { zhCN } from '~/lib/clerkLocalizations'

export async function generateMetadata({ params }: { params: RootParams }): Promise<Metadata> {
  return {
    title: 'LRboyz',
    icons: {
      icon: '/favicon/favicon-32x32.png'
      // shortcut: '/favicon.ico'
      // apple: '/favicon/apple-touch-icon.png'
    }
  }
}

interface RootLayoutProps {
  children: React.ReactNode
  params: RootParams
}

function AppContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative min-h-screen'>
      <Header />
      <section className='pt-[60px] max-w-5xl mx-auto flex'>
        <Nav />
        <main className='flex-1'>{children}</main>
        <Sidebar />
      </section>
    </div>
  )
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  let message
  try {
    message = (await import(`../../messages/${params.locale}`)).default
  } catch (error) {
    notFound()
  }

  return (
    <ClerkProvider localization={zhCN}>
      <html lang={params.locale} suppressHydrationWarning className={``}>
        <body className=' min-h-screen '>
          <Background />
          <SayHi />
          <AppNextUIProvider>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
              <IntlProvider locale={params.locale} messages={message}>
                <AppContainer>{children}</AppContainer>
              </IntlProvider>
            </ThemeProvider>
          </AppNextUIProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
