import { getPostBySlug } from '~/sanity/queries'
import PostDetail from './postDetail'
import { redis } from '~/lib/redis'
import { kvKeys } from '~/config/app.config'
import TableOfContents from '~/components/TableOfContents'

import { Votes } from './votes'

export default async function PostSlugPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  const views = await redis.incr(kvKeys.postViews(post._id))

  return (
    <div className='md:flex mt-10 w-full xl:relative md:justify-between'>
      <aside className='w-20 px-2 '>
        <div className='sticky top-20 '>
          <Votes post={post} />
        </div>
      </aside>
      <div className={`bg-[#FEFEFE]/70 dark:bg-[#2d2d2D]/70 mx-4 p-4 flex-1 rounded-md`}>
        <PostDetail post={post} views={views} />
      </div>
      <aside className='hidden w-[220px] shrink-0 lg:block'>
        <div className=' sticky top-20'>
          <TableOfContents />
        </div>
      </aside>
    </div>
  )
}
