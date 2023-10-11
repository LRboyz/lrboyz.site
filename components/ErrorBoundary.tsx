'use client'

import { ErrorBoundary as ErrorBoundaryLib } from 'react-error-boundary'
import type { FC, PropsWithChildren } from 'react'
import { Button } from '@nextui-org/button'
import { ErrorIcon } from './icons/ErrorIcon'
import { IconProps } from './icons'

const Noop = () => null

const FallbackComponent = () => {
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
export const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorBoundaryLib
      FallbackComponent={FallbackComponent}
      onError={(e: any) => {
        console.error(e, 'Error Boundary')

        // TODO  sentry

        // captureException(e)
      }}
    >
      {children}
    </ErrorBoundaryLib>
  )
}
