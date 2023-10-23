'use client'
import React from 'react'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import { Avatar } from '@nextui-org/avatar'
import { Divider } from '@nextui-org/divider'
import { useTheme } from 'next-themes'
import clsx from 'clsx'

export default function AboutMe() {
  const { theme } = useTheme()

  const banner =
    theme === 'dark'
      ? "bg-[url('https://c.53326.com/d/file/lan2019010709/msthlam54va.jpg')]"
      : "bg-[url('https://c.53326.com/d/file/lan20191114/1djnz3cdry5.jpg')]"

  return (
    <div className='mt-10 flex justify-center flex-col items-center mx-4'>
      <div className={clsx(banner, 'transition duration-150 h-56 w-full relative bg-cover bg-no-repeat bg-center')}>
        <div className='flex items-start absolute -bottom-3 left-5'>
          <Avatar
            src={
              'https://cdn.sanity.io/images/qztykfb9/production/31181b60b553c4299c0ca1b164c2d6981471fa00-1008x1008.jpg'
            }
            className='w-20 h-20 text-large'
          />
          <div className='ml-4'>
            <p className='text-xl font-bold underline decoration-indigo-600 text-white drop-shadow-xl'>LRboyz </p>
            <div className='flex items-center gap-2 text-xs text-zinc-600'></div>
            <Button className='text-tiny text-white bg-black/20' variant='flat' color='default' radius='lg' size='sm'>
              <span>👨🏻‍💻 Frontend Developer</span>
              <Divider orientation='vertical' />
              <span>🎨 Design Lover</span>
              <Divider orientation='vertical' />
              <span>🚗 Tesla Driver</span>
            </Button>
          </div>
        </div>
      </div>
      <div className='bg-background w-full px-4 py-6'>
        <p className='text-sm'>👋🏻 欢迎来到我的小站，您可以通过一下方式联系到我 </p>
      </div>
      {/* <Card isFooterBlurred radius='lg' className='border-none'>
        <Image alt='Woman listing to music' className='object-cover' height={200} src={Avatar} width={200} />
        <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='text-tiny text-white/80'>Available soon.</p>
          <Button className='text-tiny text-white bg-black/20' variant='flat' color='default' radius='lg' size='sm'>
            Notify me
          </Button>
        </CardFooter>
      </Card>
      <h1 className='text-2xl mt-4'>LRboy</h1> */}
    </div>
  )
}
