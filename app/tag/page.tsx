'use client'

import { useRouterQuery } from '~/lib/hooks/useRouterQuery'
import { usePostStore } from '~/store/post'
import { PostList } from '../../../components/post/PostList'
import { kvKeys } from '~/config/app.config'
import { useEffect, useState } from 'react'
import { EmptyIcon } from '~/components/icons/Empty.Icon'
import HomeLayout from '../(home)/layout'
// import { fetchViews } from '../action'

export default function PostByTagPage() {
  const routerQuery = useRouterQuery()
  const { slug } = routerQuery
  const [views, setViews] = useState<number[]>([])
  const { getPosts, posts, loading, paginate } = usePostStore()
  const postIdKeys = posts.map(({ _id }) => kvKeys.postViews(_id))

  // const getViews = async () => {
  //   const views = await fetchViews(postIdKeys)
  //   setViews(views)
  // }

  const handleLoadMore = () => getPosts({ page: paginate.page + 1 })

  useEffect(() => {
    getPosts({ tag: slug })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  useEffect(() => {
    // if (posts.length > 0) getViews()
  }, [posts.length])

  return (
    <div className='mt-10  rounded-md'>
      <div className='px-4 h-36 flex items-center justify-center bg-background mx-4 mb-4 rounded-md'>
        <h3 className='text-3xl'># {slug}</h3>
      </div>
      <div className='mx-4'>
        <PostList views={views} posts={posts} />
        {posts.length === 0 && (
          <div className='w-full flex justify-center'>
            <EmptyIcon className='w-36' />
          </div>
        )}
      </div>
    </div>
  )
}
