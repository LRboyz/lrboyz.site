'use client'

import React from 'react'
import Typed from 'typed.js'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import { Button } from '@nextui-org/button'
import { Tooltip } from '@nextui-org/tooltip'
import { SocialLink } from './link/socialLink'
import Link from 'next/link'
import Image from 'next/image'
import AuthorAvatar from '~/assets/avatar.png'

export default function WelCome() {
  const el = React.useRef(null)
  React.useEffect(() => {
    if (!el.current) return
    const introduce = new Typed(el.current, {
      strings: ["Hi, I'm LRboy 👋。<br/><br/>一名前端开发工程师🧑‍💻 ，请多多指教！ <br/><br/>欢迎来到我的小站。``"],
      showCursor: false,
      typeSpeed: 50,
      backSpeed: 10,
      shuffle: true,
      smartBackspace: false,
      backDelay: 500,
      startDelay: 1000,
      loop: true
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      introduce.destroy()
    }
  }, [])

  return (
    <div className='w-full flex px-10'>
      <TwoColumnLayout>
        <motion.div
          animate={{
            scale: [0, 0.5, 1.1, 1.2, 1],
            speed: [200, 300, 400],
            borderRadius: ['20%', '20%', '50%', '50%', '20%']
          }}
        >
          <div className='relative bg-gray-800 rounded-lg p-4 w-full min-h-[400px] shadow-2xl'>
            <div className='absolute top-0 left-0 m-2 w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='absolute top-0 left-4 m-2 w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='absolute top-0 left-8 m-2 w-3 h-3 bg-green-500 rounded-full'></div>
            <pre className='text-gray-200 font-mono text-sm overflow-auto mt-6'>
              <code>
                <div ref={el} className='text-white text-2xl flex flex-col absolute left-5 top-10' />
              </code>
            </pre>
          </div>
        </motion.div>
        <div className='flex justify-center items-center flex-col h-full'>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.5 // 将 duration 属性设置为 1000 毫秒
            }}
          >
            <Image width={200} height={200} src={AuthorAvatar} alt={'Author Avatar'} priority />
          </motion.div>
          <motion.div
            className='mt-6 mb-12 flex gap-6'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 50,
              stiffness: 90,
              duration: 0.35,
              delay: 0.25
            }}
          >
            <SocialLink href='https://twitter.com/LRboyzZ' aria-label='我的推特' platform='twitter' />
            <SocialLink href='https:///youtube.com/LRboyz' aria-label='我的 YouTube' platform='youtube' />
            <SocialLink href='https://space.bilibili.com/400641814' aria-label='我的 Bilibili' platform='bilibili' />
            <SocialLink href='https://github.com/LRboyz' aria-label='我的 GitHub' platform='github' />
            <SocialLink href='https://tg.com' aria-label='我的 Telegram' platform='telegram' />
            <SocialLink href='/feed.xml' platform='rss' aria-label='RSS 订阅' />
            <SocialLink href='lr603552916@gmail.com' aria-label='我的邮箱' platform='mail' />
          </motion.div>
          <Tooltip content='开启我的小站旅行！！！ 🚀' color='foreground'>
            <Link href={`/posts`}>
              <Button size='sm' className='bg-gradient-to-tr from-zinc-500 to-white-500 text-white shadow-lg '>
                🚀 前往我的博客
              </Button>
            </Link>
          </Tooltip>
        </div>
      </TwoColumnLayout>
    </div>
  )
}

const TwoColumnLayout = ({
  children,
  leftContainerClassName,
  rightContainerClassName
}: {
  children: [React.ReactNode, React.ReactNode] | [React.ReactNode, React.ReactNode, React.ReactNode]

  leftContainerClassName?: string
  rightContainerClassName?: string
}) => {
  return (
    <div className='relative flex min-h-[80vh] w-full flex-col flex-wrap items-center lg:flex-row'>
      {children.slice(0, 2).map((child, i) => {
        return (
          <div
            key={i}
            className={clsx(
              'flex h-1/2 w-full flex-col center lg:h-auto lg:w-1/2',

              i === 0 ? leftContainerClassName : rightContainerClassName
            )}
          >
            <div className='relative max-w-full lg:max-w-xl'>{child}</div>
          </div>
        )
      })}

      {children[2]}
    </div>
  )
}
