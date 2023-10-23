'use client'

import { Skeleton } from '@nextui-org/skeleton'

export default function PostSkeleton() {
  return (
    <div className='flex flex-col w-full  '>
      <Skeleton className=''>
        <div className='h-48 rounded-lg'></div>
      </Skeleton>
      <div className='w-full flex mt-4 p-2 bg-[#fefefe] gap-4 dark:bg-[#3c3c3c]/70'>
        <Skeleton className='w-24'>
          <div className='h-8'></div>
        </Skeleton>
        <Skeleton className='flex-1'>
          <div className='h-8  '></div>
        </Skeleton>
      </div>
      {[1, 2, 3, 4, 5, 6].map(item => (
        <div className='w-full flex mt-4 p-2 bg-[#fefefe] gap-4 dark:bg-[#3c3c3c]' key={item}>
          <Skeleton className='w-32'>
            <div className='h-24 '></div>
          </Skeleton>
          <div className='space-y-3 flex-1'>
            <Skeleton className='w-3/5 '>
              <div className='h-4 w-3/5 '></div>
            </Skeleton>
            <Skeleton className='w-4/5 '>
              <div className='h-4 w-4/5'></div>
            </Skeleton>
            <Skeleton className='w-2/5 '>
              <div className='h-4 w-2/5  '></div>
            </Skeleton>
          </div>
        </div>
      ))}
    </div>
  )
}
