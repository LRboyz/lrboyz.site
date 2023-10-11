import Logo from '~/components/Logo'
import { ThemeSelector } from './ThemeSelector'
import { LocaleSelector } from './LocaleSelector'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='fixed top-0 z-50 h-[60px] w-full bg-[#fefefe]/50 dark:bg-[#2d2d2D]/50 backdrop-blur-sm px-2 overflow-hidden'>
      <div className='flex h-full max-w-5xl items-center justify-between lg:mx-auto '>
        <Link href={'/'} className='cursor-pointer '>
          <Logo className='w-28' />
        </Link>
        <div className='flex gap-2'>
          <ThemeSelector />
          <LocaleSelector />
        </div>
      </div>
    </header>
  )
}
