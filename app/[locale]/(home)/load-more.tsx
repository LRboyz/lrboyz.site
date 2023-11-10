'use client'

import clsx from 'clsx'
import { useState } from 'react'

import { usePostStore } from '~/store/post'
import { Divider } from '@nextui-org/divider'
import { Button } from '@nextui-org/button'

import { PostList } from '~/components/post/PostList'

interface LoadMoreProps {
  total: number
  currSize: number
}

export default function LoadMore({ total, currSize }: LoadMoreProps) {
  const { posts, getPosts, paginate, loading } = usePostStore()
  const [hoverColor, setHoverColor] = useState('')
  const handleLoadMore = async () => {
    if (isLoadMore) getPosts({ page: paginate.page! + 1 })
  }

  const postsCount = currSize + posts.length

  const isLoadMore = postsCount < total

  return (
    <div className='w-full'>
      {posts.length > 0 && <PostList posts={posts} views={[]} />}
      <Divider />
      <div className=' flex justify-center my-4'>
        <div
          className={clsx('w-full transition duration-300  transform  hover:shadow-none', {
            'hover:-translate-y-2 ': isLoadMore
          })}
        >
          <Button
            variant='light'
            className={clsx('text-sm w-full dark:bg-zinc-800 dark:text-zinc-400', {
              'shadow-light dark:shadow-dark': isLoadMore,
              'cursor-not-allowed dark:text-zinc-600 text-zinc-200': !isLoadMore
            })}
            onClick={handleLoadMore}
          >
            <p className='px-1'>{loading ? '加载中...' : isLoadMore ? '加载更多' : '到底啦 ～'}</p>
          </Button>
        </div>
      </div>
    </div>
  )
}
