import { TbSearch } from 'react-icons/tb'

export function SearchPost() {
  return (
    <div className='flex shadow-md text-zinc-500 '>
      <input
        className='text-sm placeholder-stone-400 placeholder:text-xs border-r-0 hover:bg-zinc-100 dark:bg-[#2d2d2d]/70 border-0 h-10 w-full rounded-l-md bg-[#fefefe]/80  transition-all duration-150 relative'
        placeholder='搜索喜欢的文章...'
      ></input>
      <button className='w-12 flex justify-center items-center border-l-0  dark:bg-[#2d2d2d]/70 px-2 dark:hover:bg-[#2d2d2d] dark:hover:text-stone-400 rounded-r-md bg-zinc-100  shadow-sm hover:shadow-md transition-all duration-150'>
        <TbSearch />
      </button>
    </div>
  )
}
