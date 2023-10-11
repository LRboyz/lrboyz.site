import { PostList } from './post-list'
import BannerList from '~/components/banner'
import { kvKeys } from '~/config/app.config'

import { redis } from '~/lib/redis'

import { fetchPosts } from './action'
import { Suspense } from 'react'

export default function Home() {
  // const { posts } = await fetchPosts({ limit: DEFAULT_ARTICLE_OFFSET, skip: 0 })
  // const postIdKeys = posts.map(({ _id }) => kvKeys.postViews(_id))

  // let views: number[] = []
  // if (isDev) {
  //   views = await redis.mget<number[]>(...postIdKeys)
  //   // views = posts.map(() => Math.floor(Math.random() * 1000))
  // } else {
  //   views = await redis.mget<number[]>(...postIdKeys)
  // }

  return (
    <div className='mx-4 py-10'>
      <PostList />
    </div>
  )
}
