/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Spinner } from '@nextui-org/spinner'
import { useTranslations } from 'next-intl'
import { Paginate } from '~/store/post'
import { FiChevronsDown, FiInbox } from 'react-icons/fi'
import { Post } from '~/sanity/schemas/post'
import { useMemo, useState } from 'react'
import { PostCard } from './post-card'
import clsx from 'clsx'
import BannerList from '~/components/banner'
import { useRouterQuery } from '~/lib/hooks/useRouterQuery'
import { EmptyIcon } from '~/components/icons/Empty.Icon'
import PostSkeleton from '~/components/skeleton/postSekleton'

interface PostListProps {
  loading: boolean
  posts: Post[]
  paginate: Paginate
  views: number[]
  loadMore: () => void
}

export function PostList({ loading, posts, paginate, views, loadMore }: PostListProps) {
  /* hooks */
  const t = useTranslations('Post')
  const { slug } = useRouterQuery()
  /* state */
  const [hoverColor, setHoverColor] = useState('')

  const className =
    hoverColor === '' ? 'dark:bg-[#2d2d2d]/70' : 'bg-[#0088FF] dark:bg-[#0088FF] transition duration-100'
  const className2 = hoverColor === '' ? '' : 'text-white dark:text-white transition duration-100'

  const isLoadMore = posts.length < paginate.total

  return (
    <div className='flex flex-col gap-4 mb-6 rounded-md px-4 min-h-screen '>
      <div className='flex w-full divide-x justify-center flex-col items-center gap-4'>
        {loading && posts.length === 0 ? (
          <PostSkeleton />
        ) : (
          <>
            {posts.length === 0 && !loading ? (
              <div className='w-full flex justify-center py-4'>
                <EmptyIcon />
              </div>
            ) : (
              <>
                {!slug && <BannerList posts={posts} />}
                {posts.map((post, idx) => (
                  <PostCard post={post} view={views[idx]} key={post._id} />
                ))}
                <button
                  onClick={loadMore}
                  disabled={loading || !isLoadMore}
                  onMouseEnter={() => setHoverColor('#0088F5')}
                  onMouseLeave={() => setHoverColor('')}
                  className={`w-full border-none ${
                    loading || !isLoadMore ? 'cursor-not-allowed' : 'cursor-pointer hover:text-stone-400'
                  } text-stone-400/50  transition duration-100 relative  py-2 rounded-md flex items-center justify-between `}
                >
                  <div
                    style={{ zIndex: -1 }}
                    className='absolute w-full h-full top-0 bottom-0 overflow-hidden flex justify-between'
                  >
                    <div className='bg-[#fefefe]/90 dark:bg-[#2d2d2d]/70 flex-1 transform -skew-x-12 -ml-16'></div>
                    <div className={clsx(className, 'w-28 bg-[#fefefe]/90 -mr-2 ml-4 transform -skew-x-12')}></div>
                  </div>
                  <div>
                    <p className='px-4'>
                      {posts.length} / {paginate.total}
                    </p>
                  </div>
                  <div className={clsx(className2, 'flex items-center px-4')} onClick={loadMore}>
                    <p className='text-sm text-center mr-1'>
                      {loading ? '加载中...' : isLoadMore ? '加载更多' : '到底啦 ～'}
                    </p>
                    {isLoadMore && <FiChevronsDown />}
                  </div>
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
