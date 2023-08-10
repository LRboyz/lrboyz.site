'use client'

import clsx from 'clsx'
import { TbSearch } from 'react-icons/tb'
import HotPostList from './widget/Post/HotPostList'

export default function Sidebar({ className }: { className?: string }) {
  return (
    <div className={clsx(' md:mx-0 mt-2  md:w-[240px] md:flex-shrink-0 py-2  lg:block hidden', className)}>
      <div className='dark:bg-dcbg px-2  bg-lcbg rounded-md py-2'>
        <SearchPost />
      </div>

      <HotPostList />

      <h1>THis is Sidebar Component</h1>
    </div>
  )
}

function SearchPost() {
  return (
    <div className='flex dark:bg-[#2a2a2a]/70 dark:hover:bg-[#2a2a2a] bg-[#fefefe]/90 hover:bg-white px-2 py-1'>
      <input
        className=' text-sm dark:bg-[#1a1a1a]/50 border-0 h-7 mr-2 w-full rounded-md bg-[#fefefe]/50 hover:bg-[#fefefe]'
        placeholder='喜欢'
      />
      <button className='dark:bg-[#1a1a1a]/50 px-2 dark:hover:bg-[#1a1a1a] rounded-md bg-[#fefefe]/50 hover:bg-[#fefefe]'>
        <TbSearch />
      </button>
    </div>
  )
}
