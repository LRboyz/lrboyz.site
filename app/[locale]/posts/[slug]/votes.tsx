'use client'

import { useVotesStore } from '~/store/vote'
import { HeartButton } from './components/heart'
import { useMemo } from 'react'
import { Post } from '~/sanity/schemas/post'
import { CommentButton } from './components/comment'
import { CoffeeButton } from './components/coffee'

interface VotesProps {
  post: Post
}

export function Votes({ post }: VotesProps) {
  const { likePosts, handleLikePost } = useVotesStore()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isLike = useMemo(() => likePosts.includes(post._id), [likePosts.length])

  console.log(isLike, '是否喜欢')
  const handleLike = () => {
    if (isLike) {
      alert('已赞！！')
      return
    }
    handleLikePost(post._id)
  }

  return (
    <div className='bg-[#2d2d2d]/70 flex-col flex justify-top py-4 items-center gap-4 px-2 rounded-lg h-96'>
      <HeartButton onLike={handleLike} isLike={isLike} />
      <CommentButton />
      <CoffeeButton />
    </div>
  )
}
