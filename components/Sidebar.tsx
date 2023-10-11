import clsx from 'clsx'
import TagList from './TagList'
import { SearchPost } from './SearchPost'
import HotPostList from './HotPostList'

interface SideBarProps {
  className?: string
  children?: React.ReactNode
}
export default async function Sidebar({ className }: SideBarProps) {
  return (
    <div className={clsx('mt-10 md:mx-0 md:w-[240px] md:flex-shrink-0 lg:block hidden', className)}>
      <div className='rounded-md'>
        <SearchPost />
      </div>
      <HotPostList />
      <TagList />
    </div>
  )
}
