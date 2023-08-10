'use client'

import { Tooltip } from '@nextui-org/tooltip'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link, { type LinkProps } from 'next/link'
import React from 'react'
import {
  TbAtom,
  TbBrandBilibili,
  TbBrandGithub,
  TbBrandTelegram,
  TbBrandTwitter,
  TbBrandYoutube,
  TbMail
} from 'react-icons/tb'
import { IconProps } from '~/components/icons'

type IconType = (props: IconProps) => JSX.Element
type Platform = 'github' | 'twitter' | 'youtube' | 'telegram' | 'bilibili' | 'mail' | 'rss'
type PlatformInfo = {
  icon: IconType
  platform: Platform
  label: string
  color: string
}
const iconMapper: { [key: string]: PlatformInfo } = {
  '(?:github.com)': {
    icon: TbBrandGithub,
    platform: 'github',
    label: 'GitHub',
    color: '#725AC9'
  },
  '((?:t.co)|(?:twitter.com))': {
    icon: TbBrandTwitter,
    platform: 'twitter',
    label: 'Twitter',
    color: '#1B95E0'
  },
  '((?:youtu.be)|(?:youtube.com))': {
    icon: TbBrandYoutube,
    platform: 'youtube',
    label: 'YouTube',
    color: '#Ec3323'
  },
  '((?:t.me)|(?:telegram.com))': {
    icon: TbBrandTelegram,
    platform: 'telegram',
    label: 'Telegram',
    color: '#54A5DD'
  },
  '(?:bilibili.com)': {
    icon: TbBrandBilibili,
    platform: 'bilibili',
    label: '哔哩哔哩',
    color: '#FB7299'
  },
  '(?:mailto:)': {
    icon: TbMail,
    platform: 'mail',
    label: '邮箱地址',
    color: ''
  },
  '(?:feed.xml)': {
    icon: TbAtom,
    platform: 'rss',
    label: 'RSS 订阅',
    color: '#f8981d'
  }
}

function getIconForUrl(url: string): PlatformInfo | undefined {
  for (const regexStr in iconMapper) {
    const regex = new RegExp(`^(?:https?:\/\/)?(?:[^@/\\n]+@)?(?:www.)?` + regexStr)
    if (regex.test(url)) {
      return iconMapper[regexStr]!
    }
  }

  return undefined
}

function getIconForPlatform(platform: Platform | undefined): PlatformInfo | undefined {
  if (!platform) {
    return undefined
  }

  for (const info of Object.values(iconMapper)) {
    if (info.platform === platform) {
      return info
    }
  }

  return undefined
}

export function SocialLink({
  platform,
  href,
  ...props
}: { platform?: Platform } & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [open, setOpen] = React.useState(false)
  const info = getIconForPlatform(platform) ?? getIconForUrl(href.toString())
  const { theme } = useTheme()

  if (!info) {
    console.warn(`No icon found for ${href.toString()}`)

    return <Link href={href} {...props} />
  }

  return (
    <Tooltip
      color='foreground'
      content={
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <b style={{ color: info.color }}>{info.label}</b>
          </motion.div>
        </AnimatePresence>
      }
    >
      <Link className='group -m-1 p-1' href={href} target='_blank' prefetch={false} aria-label={info.label} {...props}>
        <info.icon
          style={{ color: info.color }}
          className='h-5 w-5 text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200'
        />
      </Link>
    </Tooltip>
  )
}
