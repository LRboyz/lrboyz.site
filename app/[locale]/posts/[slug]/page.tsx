import { notFound } from 'next/navigation'
import { getPostBySlug } from '~/sanity/queries'
import PostDetail from './postDetail'

export default async function PostSulgPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }
  return (
    <div className={`bg-[#FEFEFE]/70 dark:bg-[#2a2a2a]/70  p-4 min-h-[90vh]`}>
      <PostDetail post={post} />
    </div>
  )
}
