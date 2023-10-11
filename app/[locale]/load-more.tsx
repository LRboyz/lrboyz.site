// 'use client'
// import { Spinner } from '@nextui-org/spinner'
// import { useEffect, useRef, useState } from 'react'

// import { Post } from '~/sanity/schemas/post'
// import { getPosts } from '~/sanity/queries'
// import { useIsVisible } from '~/lib/hooks/useIsVisible'

// export function LoadMore() {
//   const container = useRef(null)
//   const visible = useIsVisible(container)

//   const loadMorePosts = async () => {}

//   useEffect(() => {
//     if (visible) loadMorePosts()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [visible])

//   return (
//     <>
//       <div ref={container} className='w-full flex justify-center'>
//         <Spinner />
//       </div>
//     </>
//   )
// }
