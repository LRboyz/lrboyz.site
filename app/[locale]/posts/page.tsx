import { ErrorBoundary } from '~/components/common/ErrorBoundary'
import PostList from '~/components/widget/Post/PostList'
import { GetPostParams, getPosts } from '~/sanity/queries'

async function fetchPosts(params: GetPostParams) {
  'use server'
  const posts = await getPosts({ ...params })
  return posts
}
export default async function PostPage() {
  const posts = await fetchPosts({})

  return (
    <ErrorBoundary>
      <PostList Posts={posts} fetchPosts={fetchPosts} />
    </ErrorBoundary>
  )
}
