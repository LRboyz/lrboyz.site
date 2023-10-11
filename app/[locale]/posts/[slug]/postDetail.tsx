'use client'
import { PostPortableText } from '~/components/PostPortableText'
import { Prose } from '~/components/Prose'
import { PostDetail } from '~/sanity/schemas/post'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BiFont, BiTime } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'

interface PostDetailProps {
  post: PostDetail
  views: number
}

export default function PostDetailPage({ post, views }: PostDetailProps) {
  const { body, mainImage, title, readingTime, publishedAt, headings } = post
  return (
    <div className={`relative`}>
      <article className=' border-b'>
        <header className='relative flex flex-col items-center'>
          <motion.div
            className='relative  w-full text-center mb-4'
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.35,
              type: 'spring',
              stiffness: 120,
              damping: 20
            }}
          >
            <h2 className='text-xl font-bold'>{title}</h2>
            <div className='flex gap-2 text-xs w-full justify-center my-2 font-sans text-[#9e9e9e]'>
              <div className='flex items-center'>
                <BiFont className='mr-1' />共 13245 字, 需要阅读{readingTime}分钟
              </div>
              <div className='flex items-center'>
                <BiTime className='mr-1' />
                发布于3天前
              </div>
              <div className='flex items-center'>
                <TbEye className='mr-1' /> 共{views}次阅读
              </div>
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
      <div></div>
    </div>
  )
}
