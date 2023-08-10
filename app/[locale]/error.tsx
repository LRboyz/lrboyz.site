'use client'

import { Button } from '@nextui-org/button'
import { useTranslations } from 'next-intl'
import { ErrorIcon } from '~/components/icons/ErrorIcon'

export default function RootError() {
  const t = useTranslations()

  return (
    <div className='flex w-full flex-col py-6  justify-center items-center'>
      <ErrorIcon className='text-6xl mb-4' />
      Something went wrong
      <p className='shiro-link--underline mb-4'>
        Please contract to <b className=' hover:text-blue-500 cursor-pointer'> lr603552916@gmail.com</b>
      </p>
      <Button
        size='sm'
        onPress={() => {
          window.location.reload()
        }}
      >
        Reload Page
      </Button>
    </div>
  )
}
