'use client'

import { usePostStore } from '~/store/post'
import { PostList } from './post-list'
import { useEffect, useState } from 'react'
import { fetchViews } from './action'
import { kvKeys } from '~/config/app.config'

export default function Home() {
  const { getPosts, posts, loading, paginate, setPaginate } = usePostStore()
  const [views, setViews] = useState<number[]>([])

  const postIdKeys = posts.map(({ _id }) => kvKeys.postViews(_id))

  const getViews = async () => {
    const views = await fetchViews(postIdKeys)
    setViews(views)
  }

  const handleLoadMore = () => getPosts({ page: paginate.page + 1 })

  useEffect(() => {
    if (posts.length > 0) getViews()
  }, [posts.length])

  useEffect(() => {
    getPosts({})
  }, [paginate.page])

  return (
    <div className='mx-4 pb-6 rounded-md mt-10'>
      <PostList views={views} posts={posts} loading={loading} paginate={paginate} loadMore={handleLoadMore} />
    </div>
  )
}
