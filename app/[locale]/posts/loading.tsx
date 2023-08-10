import { Card } from '@nextui-org/card'
import { Skeleton } from '@nextui-org/skeleton'

export default function Loading() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map(item => (
        <div className='w-full space-y-5 p-4 mb-2 ' key={item}>
          <div className='flex'>
            <div className='w-40 mr-2'>
              <Skeleton className='rounded-md'>
                <div className='h-24 rounded-lg bg-default-300'></div>
              </Skeleton>
            </div>
            <div className='flex-1 space-y-2 relative'>
              <Skeleton className='w-3/5 rounded-sm'>
                <div className='h-5 w-3/5 rounded-lg bg-default-200'></div>
              </Skeleton>
              <Skeleton className='w-full rounded-sm'>
                <div className='h-4 w-4/5 rounded-lg bg-default-200'></div>
              </Skeleton>
              <Skeleton className='w-full rounded-sm'>
                <div className='h-4 w-4/5 rounded-lg bg-default-200'></div>
              </Skeleton>
              <Skeleton className='w-2/5 rounded-sm absolute bottom-0'>
                <div className='h-4 w-2/5 rounded-lg bg-default-300'></div>
              </Skeleton>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
