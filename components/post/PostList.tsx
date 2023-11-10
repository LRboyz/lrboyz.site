import { Post } from '~/sanity/schemas/post'
import { PostCard } from './PostCard'
import { Suspense } from 'react'

interface PostListProps {
  posts: Post[]
  views: number[]
}

export function PostList({ views, posts }: PostListProps) {
  return (
    <div className='flex flex-col gap-4 mb-6 rounded-md '>
      {posts.map((post, idx) => (
        <PostCard post={post} view={views[idx]} key={post._id} />
      ))}
    </div>
  )
}
