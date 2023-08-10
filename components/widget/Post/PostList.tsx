'use client'

import { Post } from '~/sanity/schemas/post'
import PostItem from './PostItem'
import { Button } from '@nextui-org/button'
import { useEffect, useRef, useState } from 'react'
import { GetPostParams } from '~/sanity/queries'
import { DEFAULT_ARTICLE_OFFSET } from '~/constants/state'
import PostSpinner from '~/components/ui/PostSpinner'
import { FiChevronsDown } from 'react-icons/fi'
import { GoInbox } from 'react-icons/go'

interface PostListProps {
  Posts: Post[]
  fetchPosts: ({ pageIndex, limit }: GetPostParams) => Promise<Post[]>
}

export default function PostList({ Posts, fetchPosts }: PostListProps) {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState(Posts)
  const [currPage, setCurrPage] = useState(1)
  const isLoadMoreEnabled = posts.length >= posts[0].total!

  const onLoadMore = async () => {
    setCurrPage(currPage + 1)
  }

  const fetchMoreArticle = async () => {
    const PostQueryParams = {
      pageIndex: (currPage - 1) * DEFAULT_ARTICLE_OFFSET,
      limit: currPage * DEFAULT_ARTICLE_OFFSET
    }
    try {
      setLoading(true)
      if (posts.length < posts[0].total!) {
        const latestPosts = await fetchPosts({ ...PostQueryParams })
        console.log(latestPosts, '最新的文章')
        setPosts(prev => [...prev, ...latestPosts])
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (currPage > 1) {
      fetchMoreArticle()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage])

  return (
    <div className='flex flex-col gap-2 w-full'>
      {posts.map(post => {
        return <PostItem key={post._id} post={post} />
      })}
      <div className='flex w-full py-1 px-4 rounded-md h-full items-center justify-between cursor-pointer dark:bg-[#2a2a2a]/70 dark:hover:bg-[#2a2a2a] bg-[#fefefe]/90 hover:bg-white'>
        {loading ? (
          <PostSpinner />
        ) : (
          <p className='text-sm m-0 text-lgray'>
            {posts.length || 0} / {posts[0].total || 0}
          </p>
        )}
        <div className='flex justify-center items-center'>
          <Button
            size='sm'
            onPress={onLoadMore}
            isLoading={loading}
            isDisabled={isLoadMoreEnabled}
            variant='light'
            className='text-lgray'
          >
            <span className='mt-1'> {isLoadMoreEnabled ? '暂无更多' : loading ? '正在加载...' : '加载更多'}</span>
            {isLoadMoreEnabled ? <GoInbox className='text-md' /> : <FiChevronsDown />}
          </Button>
        </div>
      </div>
    </div>
  )
}
