import 'tailwindcss/tailwind.css';
import '~/styles/globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { notFound } from 'next/navigation';
import IntlProvider from '~/providers/IntlProvider';
import { getMessages } from '../../i18n.server';
import { ThemeProvider } from '~/providers/ThemeProvider';
import { Background } from '~/components/widget/Background';
import Header from '../Header';
import { Sidebar } from '~/components/widget/Sidebar';
import { AnalyticsWrapper } from '../Analytics';

const fontSansEn = Manrope({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans-en',
  fallback: ['ui-sans-serif'],
});

export async function generateMetadata({
  params,
}: {
  params: RootParams;
}): Promise<Metadata> {
  return {
    title: 'LRboyz',
    icons: {
      icon: '/favicon/favicon-32x32.png',
      shortcut: '/favicon.ico',
      apple: '/favicon/apple-touch-icon.png',
    },
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: RootParams;
}
export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  let message;
  try {
    message = (await import(`../../messages/${params.locale}`)).default;
  } catch (error) {
    notFound();
  }
  console.log(params, 'params');
  return (
    <html
      lang={params.locale}
      suppressHydrationWarning
      className={`font-sans ${fontSansEn.variable}`}
    >
      <body className="bg-stone-50 text-stone-800 dark:bg-stone-900 dark:text-stone-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <IntlProvider locale={params.locale} messages={message}>
            <Background />
            <Header />

            <main className="relative mx-2 flex min-h-screen max-w-4xl flex-col pt-[60px]  md:mx-4 md:mt-0 md:flex-row lg:mx-auto ">
              <Sidebar />
              <section
                className="frosted-noise relative z-20 mt-3 flex w-full flex-auto flex-col border border-transparent bg-[#fefefe] p-5 pb-36 shadow-xl
               dark:border-stone-800 dark:bg-[#1a1a1a] md:mt-0 md:p-7 md:pb-36 lg:p-9 lg:pb-44"
              >
                <article className="prose dark:prose-invert prose-headings:tracking-tighter prose-h1:text-2xl prose-p:leading-loose prose-p:tracking-tight prose-li:tracking-tight prose-img:rounded-xl lg:prose-h1:text-4xl">
                  {children}
                </article>
              </section>
            </main>
          </IntlProvider>
        </ThemeProvider>

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
