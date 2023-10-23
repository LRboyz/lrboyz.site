'use client'

import { useRouterQuery } from '~/lib/hooks/useRouterQuery'
import { usePostStore } from '~/store/post'
import { PostList } from '../post-list'
import { kvKeys } from '~/config/app.config'
import { useEffect, useState } from 'react'
import { fetchViews } from '../action'

export default function PostByTagPage() {
  const routerQuery = useRouterQuery()
  const { slug } = routerQuery
  const [views, setViews] = useState<number[]>([])
  const { getPosts, posts, loading, paginate } = usePostStore()
  const postIdKeys = posts.map(({ _id }) => kvKeys.postViews(_id))

  const getViews = async () => {
    const views = await fetchViews(postIdKeys)
    setViews(views)
  }

  const handleLoadMore = () => getPosts({ page: paginate.page + 1 })

  useEffect(() => {
    getPosts({ tag: slug })
  }, [paginate.page, slug])

  useEffect(() => {
    if (posts.length > 0) getViews()
  }, [posts.length])

  return (
    <div className='mt-10  rounded-md'>
      <div className='px-4 h-36 flex items-center justify-center bg-background mx-4 mb-4 rounded-md'>
        <h3 className='text-3xl'># {slug}</h3>
      </div>
      <PostList views={views} posts={posts} loading={loading} paginate={paginate} loadMore={handleLoadMore} />
    </div>
  )
}
