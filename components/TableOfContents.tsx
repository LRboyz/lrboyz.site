'use client'

import { usePostStore } from '~/store/post'
import { PostTableOfContents } from './PostTableofContents'

export default function TableOfContents() {
  const { currPost } = usePostStore()
  return (
    <div className='flex flex-col  text-sm  border-0 px-3 mr-2 rounded-md dark:bg-[#2d2d2D]/70 dark:hover:bg-[#2d2d2D] bg-[#fefefe] hover:bg-white p-2 pb-4 text-stone-400'>
      <div className=' border-1 border-stone-600 hover:border-stone-900 border-dashed p-1 mb-4'>
        <p className='font-bold  text-lg'>目录</p>
      </div>
      <PostTableOfContents headings={currPost.headings || []} />
    </div>
  )
}
