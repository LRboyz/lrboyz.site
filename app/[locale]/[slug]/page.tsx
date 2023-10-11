import { getPosts, getPostsByTag } from '~/sanity/queries'
import TagCard from './tagCard'
import { kvKeys } from '~/config/app.config'
import { isDev } from '~/constants/environment'
import { redis } from '~/lib/redis'
import PostList from '~/components/widget/post/postList'

interface TagPostProps {
  params: {
    slug: string
  }
}
export default async function TagPostPage({ params }: TagPostProps) {
  const slug = params.slug
  const posts = await getPostsByTag({ tag: slug })
  //   const postIdKeys = posts.data.map(({ _id }) => kvKeys.postViews(_id))

  //   let views: number[] = []
  //   if (isDev) {
  //     views = await redis.mget<number[]>(...postIdKeys)
  //     // views = posts.map(() => Math.floor(Math.random() * 1000))
  //   } else {
  //     views = await redis.mget<number[]>(...postIdKeys)
  //   }
  return (
    <div className='flex flex-col w-full'>
      <TagCard slug={slug} />
      <PostList posts={posts.data} views={[]} postMeta={posts.meta} />
    </div>
  )
}
