'use client'

import { Skeleton } from '@nextui-org/skeleton'
export default function ImageSkeleton() {
  return (
    <Skeleton className='rounded-lg'>
      <div className='h-24 rounded-lg bg-default-300'></div>
    </Skeleton>
  )
}
