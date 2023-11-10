import clsx from 'clsx'
import TagList from './TagList'
import { SearchPost } from './SearchPost'
import HotPostList from './HotPostList'
import Analysis from './Analysis'
import TableOfContents from './TableOfContents'

interface SideBarProps {
  className?: string
}
export default async function Sidebar({ className }: SideBarProps) {
  return (
    <div className={clsx('pt-10 w-[266px]', className)}>
      <SearchPost />
      <Analysis />
      <HotPostList />
      <TagList />
    </div>
  )
}
