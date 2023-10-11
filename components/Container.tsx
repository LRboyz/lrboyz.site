// import { clsx } from 'clsx'
// import React from 'react'
// import { Nav } from '../Nav'
// import Sidebar from '../Sidebar'
// import { Tag } from '~/sanity/schemas/tag'
// import { Post } from '~/sanity/schemas/post'

// type ContainerProps = React.ComponentPropsWithoutRef<'div'> & {
//   isFullPage: boolean
//   state?: {
//     tags: Tag[]
//     hotPosts: Post[]
//   }
// }

// export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(function InnerContainer(
//   { className, children, isFullPage, state, ...props }: ContainerProps,
//   ref
// ) {
//   return (
//     <div ref={ref} className={clsx('relative flex min-h-screen max-w-5xl mx-auto w-full', className)} {...props}>
//       {!isFullPage ? (
//         <>
//           <Nav />
//           <main className='mx-4 mt-24 flex-1'>{children}</main>
//           <Sidebar />
//         </>
//       ) : (
//         children
//       )}
//     </div>
//   )
// })
