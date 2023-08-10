import { Skeleton } from '@nextui-org/skeleton'

export default function PostSlugLoading() {
  return (
    <div className='w-full space-y-5 p-4 mb-2 bg-ldbg/70 dark:dcbg/50 border-0 h-full'>
      <Skeleton className='rounded-lg'>
        <div className='h-36 rounded-lg bg-default-300'></div>
      </Skeleton>
      <div className='space-y-3 flex items-center w-full flex-col'>
        <Skeleton className='w-3/5 rounded-lg'>
          <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
        </Skeleton>
        <Skeleton className='w-4/5 rounded-lg'>
          <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
        </Skeleton>
        <Skeleton className='w-2/5 rounded-lg'>
          <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
        </Skeleton>
        <Skeleton className='w-3/5 rounded-lg'>
          <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
        </Skeleton>
        <Skeleton className='w-4/5 rounded-lg'>
          <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
        </Skeleton>
        <Skeleton className='w-2/5 rounded-lg'>
          <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
        </Skeleton>
      </div>
    </div>
  )
}
