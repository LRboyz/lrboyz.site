/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useIsVisible } from '~/lib/hooks/useIsVisible'
import { PostCard } from './post-card'
import { Post } from '~/sanity/schemas/post'
import { Spinner } from '@nextui-org/spinner'
import { fetchPosts, fetchViews } from './action'
import { kvKeys } from '~/config/app.config'
import { redis } from '~/lib/redis'
import { isDev } from '~/lib/const'
import BannerList from '~/components/banner'

export function PostList() {
  const ref = useRef(null)
  const visible = useIsVisible(ref)
  const [currentPage, setCurrPage] = useState(1)
  const [noMore, setNoMore] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [views, setViews] = useState<number[]>([])
  const perPage = 5
  const skip = (currentPage - 1) * perPage
  const postIdKeys = posts.map(({ _id }) => kvKeys.postViews(_id))

  const loadMorePosts = async () => {
    const { data, total } = await fetchPosts({ skip, limit: skip + perPage })
    if (posts.length >= total) setNoMore(true)
    setPosts(prev => [...prev, ...data])
    setCurrPage(prev => prev + 1)
  }

  const getViews = async () => {
    const views = await fetchViews(postIdKeys)
    setViews(views)
  }

  useEffect(() => {
    if (posts.length > 0) getViews()
  }, [posts.length])

  useEffect(() => {
    if (noMore) return
    if (visible) loadMorePosts()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  return (
    <div className='flex flex-col gap-4 mb-6'>
      <BannerList posts={posts} />
      {posts.map((post, idx) => (
        <PostCard post={post} views={views[idx]} key={post._id} />
      ))}

      <div ref={ref} className='w-full flex justify-center'>
        {noMore ? <>到底了~</> : <Spinner />}
      </div>
    </div>
  )
}
