'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useContext, useRef } from 'react'

export function useLayoutRouterContext() {
  return useContext(LayoutRouterContext)
}

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useLayoutRouterContext()
  const frozen = useRef(context).current

  return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>
}
export function Animate({ children }: PropsWithChildren) {
  const pathname = usePathname()

  const onTheRight = { y: '100%' }
  const inTheCenter = { y: 0 }
  const onTheLeft = { y: '-100%' }

  const transition = { duration: 0.6, ease: 'easeInOut' }

  return (
    <AnimatePresence initial={false} mode='popLayout'>
      <motion.div
        key={pathname}
        initial={onTheRight}
        animate={inTheCenter}
        exit={onTheLeft}
        transition={transition}
        style={{
          background: '#98FC99',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  )
}
