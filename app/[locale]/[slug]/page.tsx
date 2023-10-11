import TagCard from './tagCard'
import { PostList } from '../post-list'

interface TagPostProps {
  params: {
    slug: string
  }
}
export default async function TagPostPage({ params }: TagPostProps) {
  const slug = params.slug

  return (
    <div className='flex flex-col w-full'>
      <TagCard slug={slug} />
      <PostList />
    </div>
  )
}
