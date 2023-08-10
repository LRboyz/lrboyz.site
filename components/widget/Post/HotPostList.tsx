'use client'

import { getHotPosts } from '~/sanity/queries'
import { useRequest } from 'ahooks'
import { HiFire } from 'react-icons/hi'
import { Skeleton } from '@nextui-org/skeleton'
import { ErrorIcon } from '~/components/icons/ErrorIcon'

export default function HotPostList() {
  const { data: HotPosts, error, loading } = useRequest(() => getHotPosts({ pageIndex: 0, limit: 10 }))

  return (
    <div className='flex flex-col my-4 px-2  text-sm dark:bg-dcbg border-0 mr-2 w-full rounded-md dark:bg-[#2a2a2a]/70 dark:hover:bg-[#2a2a2a] bg-[#fefefe]/90 hover:bg-white p-2 pb-4'>
      <div className='flex items-center border-b-1 pb-2 hover:text-rose-500 dark:border-zinc-700'>
        <HiFire className='text-red-500' />
        <p className='ml-1'>热门文章</p>
      </div>
      <div className='flex flex-col mt-2'>
        <ul className='text-sm flex flex-col gap-2'>
          {loading ? (
            <HotPostSkeleton />
          ) : (
            <>
              {HotPosts?.map((post, index) => (
                <li key={post._id} className='flex items-start cursor-pointer hover:text-rose-500'>
                  <i className='mr-2 text-xs '>{index + 1}.</i>
                  <p className='hover:underline '>{post.title}</p>
                </li>
              ))}
            </>
          )}
          {error && (
            <div className='text-center text-zinc-500/60'>
              <ErrorIcon className='text-4xl' />
            </div>
          )}
        </ul>
      </div>
    </div>
  )
}

function HotPostSkeleton() {
  return (
    <div className='w-full flex flex-col gap-4'>
      {[1, 2, 3, 4, 5, 6].map(item => (
        <Skeleton className=' rounded-sm' key={item}>
          <div className='h-4 rounded-lg bg-default-200'></div>
        </Skeleton>
      ))}
    </div>
  )
}
