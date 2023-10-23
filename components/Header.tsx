'use client'
import Logo from '~/components/Logo'
import { ThemeSelector } from './ThemeSelector'
import { LocaleSelector } from './LocaleSelector'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import { url } from '~/lib'
import { SiGithubactions } from 'react-icons/si'
import { BsGoogle } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { Tooltip } from '@nextui-org/tooltip'
import { BiUserCircle } from 'react-icons/bi'

import { Button } from '@nextui-org/button'

export default function Header() {
  return (
    <motion.header
      layout
      layoutRoot
      className='fixed top-0 z-50 h-[60px] w-full bg-[#fefefe]/50 dark:bg-[#2d2d2D]/50 backdrop-blur-sm px-2 overflow-hidden'
    >
      <AnimatePresence>
        <div className='flex h-full max-w-5xl items-center justify-between lg:mx-auto '>
          <Link href={'/'} className='cursor-pointer '>
            <Logo className='w-28' />
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 200
            }}
            className='flex gap-2 items-center'
          >
            <ThemeSelector />
            <LocaleSelector />
            <UserInfo />
          </motion.div>
        </div>
      </AnimatePresence>
    </motion.header>
  )
}

function UserInfo() {
  const pathname = usePathname()
  const { user } = useUser()
  const StrategyIcon = useMemo(() => {
    const strategy = user?.primaryEmailAddress?.verification.strategy
    if (!strategy) {
      return null
    }
    switch (strategy) {
      case 'from_oauth_github':
        return SiGithubactions
      case 'from_oauth_google':
        return BsGoogle
      default:
        return FiMail
    }
  }, [user?.primaryEmailAddress?.verification.strategy])

  return (
    <>
      <SignedIn key='sign-in'>
        <motion.div
          className='pointer-events-auto relative flex h-10 items-center'
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 25 }}
        >
          <UserButton
            afterSignOutUrl={url(pathname).href}
            appearance={{
              elements: {
                avatarBox: 'w-9 h-9 ring-2 ring-white/20'
              }
            }}
          />
          {StrategyIcon && (
            <span className='pointer-events-none absolute -bottom-1 -right-1 flex h-4 w-4 select-none items-center justify-center rounded-full bg-white dark:bg-zinc-900'>
              <StrategyIcon className='w-3 h-3' />
            </span>
          )}
        </motion.div>
      </SignedIn>
      <SignedOut key='sign-out'>
        <Tooltip content={<div className='text-stone-400'>登 陆</div>} delay={0}>
          <div>
            <SignInButton mode='modal' redirectUrl={url(pathname).href}>
              <Button size='sm' variant='light' isIconOnly>
                <BiUserCircle className='h-5 w-5 text-stone-500' />
              </Button>
            </SignInButton>
          </div>
        </Tooltip>
      </SignedOut>
    </>
  )
}
