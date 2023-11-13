'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { TbCamera, TbPlanet, TbMoodHappy } from 'react-icons/tb'
import { SiAboutdotme } from 'react-icons/si'
import React, { ComponentProps } from 'react'

import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: '主页', icon: TbPlanet },
  { href: '/life', label: '生活', icon: TbMoodHappy },
  { href: '/photography', label: '瞬间', icon: TbCamera },
  { href: '/about', label: '关于我', icon: SiAboutdotme }
]

export function NavMenu() {
  return (
    <NavigationMenu.Root className='relative z-50 -ml-4 md:ml-0' orientation='vertical'>
      <NavigationMenu.List className='m-0 flex scroll-pr-6 list-none flex-wrap items-center overflow-scroll px-4 py-1.5 md:scroll-p-0 md:flex-col md:items-start md:overflow-visible md:px-0 md:py-0'>
        {links.map(({ href, label, icon: Icon }) => (
          <MenuLink key={label} href={href} label={label}>
            <Icon className='stroke-curren mr-2 h-5 w-5' />
            <span className='tracking-widest'>{label}</span>
          </MenuLink>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

const MenuLink = React.forwardRef<HTMLAnchorElement, ComponentProps<any>>(
  ({ className, children, href, label }, forwardedRef) => {
    const pathname = usePathname()
    const isActive = href === pathname

    return (
      <li className='mb-2 w-full '>
        <NavigationMenu.Link active={isActive} asChild>
          <Link
            href={href}
            onClick={() => {
              // @see https://github.com/framer/motion/issues/2006#issuecomment-1477824846
              window.scroll(0, 0)
            }}
            className={clsx(
              'relative inline-flex w-full select-none p-2 font-bold leading-none text-stone-400 no-underline outline-none transition-colors hover:text-stone-800 dark:text-stone-500 dark:hover:text-stone-100',
              'rounded-lg focus-visible:outline-stone-300 dark:focus-visible:outline-stone-700',
              'data-[active]:text-stone-900 dark:data-[active]:text-stone-50',
              className
            )}
            aria-label={label}
            ref={forwardedRef}
          >
            {isActive && (
              <motion.span
                className='absolute inset-0 rounded-xl border border-stone-200 bg-gradient-to-r from-white to-stone-100 dark:border-stone-700 dark:from-stone-900 dark:to-stone-800 md:rounded-l-sm md:rounded-r-xl'
                layoutId='active-menu'
              />
            )}
            <span className='relative z-40 flex items-center space-x-1 text-sm tracking-tight md:pr-1'>{children}</span>
          </Link>
        </NavigationMenu.Link>
      </li>
    )
  }
)
MenuLink.displayName = 'NavigationLinkMenuItem'
