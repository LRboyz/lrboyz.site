'use client'

import './post.css'
import { PostPortableText } from '~/components/PostPortableText'
import { Prose } from '~/components/Prose'
import { PostDetail } from '~/sanity/schemas/post'
import { motion } from 'framer-motion'
import { BiTime } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
// import { useEffect } from 'react'
// import { usePostStore } from '~/store/post'
import { LuTimer } from 'react-icons/lu'
import Image from 'next/image'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { usePostStore } from '~/store/post'

dayjs.extend(relativeTime)

interface PostDetailProps {
  post: PostDetail
  views: number
}

export default function PostDetailPage({ post, views }: PostDetailProps) {
  const { body, mainImage, title, readingTime, publishedAt, categories } = post
  const { setCurrPost } = usePostStore()

  useEffect(() => {
    setCurrPost(post)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <article data-postid={post._id} className=' border-b'>
        <header className='flex flex-col items-center'>
          <motion.div
            className='w-full mb-4 text-center '
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.35,
              type: 'spring',
              stiffness: 120,
              damping: 20
            }}
          >
            <h1 className='text-2xl font-bold'>{title}</h1>
            <div className='flex  gap-4 text-xs  my-4 font-sans text-[#9e9e9e] justify-center'>
              <p className='flex items-center'>
                <TbEye className='mr-1' /> 共{views}
                次阅读
              </p>
              <p className='flex items-center'>
                <LuTimer />
                <span className='ml-1'>约{readingTime?.toFixed(0) ?? 0}分钟阅读</span>
              </p>
              <p className='flex items-center'>
                <BiTime className='mr-1' />
                发布于 {dayjs(publishedAt).format('YYYY-MM-DD')}&nbsp;
                {dayjs(publishedAt).hour() > 11 ? '上午' : '下午'}
              </p>
              <p className='flex items-center'>{`# ${categories[0]}`}</p>
            </div>
          </motion.div>
          <motion.div
            className='relative mb-7 aspect-[120/60] w-full md:w-[100%]'
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.35,
              type: 'spring',
              stiffness: 120,
              damping: 20
            }}
          >
            <Image
              src={mainImage.asset.url}
              alt=''
              className='object-cover rounded-md'
              placeholder='blur'
              blurDataURL={mainImage.asset.lqip}
              priority
              fill
            />
          </motion.div>
        </header>
        <Prose>
          <PostPortableText value={body} />
        </Prose>
      </article>
    </>
  )
}
