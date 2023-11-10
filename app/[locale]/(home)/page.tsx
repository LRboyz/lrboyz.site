import { redis } from '~/lib/redis'
import { kvKeys } from '~/config/app.config'
import BannerList from '~/components/banner'
import LoadMore from './load-more'
import { getPosts } from '~/app/actions'
import { PostList } from '~/components/post/PostList'

interface HomeProps {
  params: {}
  searchParams: {
    tag: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag } = searchParams
  const { data: posts, paginate } = await getPosts({ tag })
  const postIds = posts.map(({ _id }) => kvKeys.postViews(_id))
  const views = await redis.mget<number[]>(...postIds)

  return (
    <>
      <BannerList posts={posts} />
      <PostList views={views} posts={posts} />
      <LoadMore total={paginate.total} currSize={posts.length} />
    </>
  )
}
