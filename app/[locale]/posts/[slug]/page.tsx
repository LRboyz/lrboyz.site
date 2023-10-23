import { notFound } from 'next/navigation'
import { getPostBySlug } from '~/sanity/queries'
import PostDetail from './postDetail'
import { redis } from '~/lib/redis'
import { kvKeys } from '~/config/app.config'

export default async function PostSlugPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  const views = await redis.incr(kvKeys.postViews(post._id))

  if (!post) {
    return notFound()
  }

  return (
    <div className={`bg-[#FEFEFE]/70 dark:bg-[#2d2d2D]/70 mx-4 mt-10 p-4 min-h-[90vh] rounded-md`}>
      <PostDetail post={post} views={views} />
    </div>
  )
}
