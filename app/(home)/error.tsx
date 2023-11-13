'use client' // Error components must be Client Components

import { Button } from '@nextui-org/button'
import { useEffect } from 'react'
import ErrorIcon from '~/components/icons/ErrrorIcon'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='w-full flex justify-center py-10 flex-col gap-8 items-center'>
      <h2 className='font-bold text-2xl text-[#F31260]'>Something went wrong!</h2>
      <ErrorIcon />
      <Button color='danger' size='sm'>
        Try again
      </Button>
    </div>
  )
}
