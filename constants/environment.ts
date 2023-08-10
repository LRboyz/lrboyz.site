import { Suspense, Fragment } from 'react'

export const isSSR = typeof window === 'undefined'
export const isSPA = !isSSR
export const SsrSuspense = isSSR ? Fragment : Suspense
export const isDev = process.env.NODE_ENV === 'development'
