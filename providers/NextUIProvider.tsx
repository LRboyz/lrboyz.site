'use client'

import { NextUIProvider as NextUIv2Provider } from '@nextui-org/system'

interface Props {
  children: React.ReactNode
}

export default function AppNextUIProvider({ children }: Props) {
  return <NextUIv2Provider>{children}</NextUIv2Provider>
}
