import { TbSearch } from 'react-icons/tb'

export function SearchPost() {
  return (
    <div className='flex dark:bg-[#2d2d2D]/70 dark:hover:bg-[#2d2d2D] p-2 rounded-md bg-[#fefefe]/70'>
      <input
        className='text-sm dark:bg-[#1a1a1a]/50 border-0 h-8 w-full rounded-l-md bg-[#fefefe]/80 hover:bg-[#fefefe] shadow-sm hover:shadow-md transition-all duration-150 relative'
        placeholder='喜欢'
      ></input>
      <button className='dark:bg-[#1a1a1a]/50 px-2 dark:hover:bg-[#1a1a1a] rounded-r-md bg-[#fefefe]/80 hover:bg-[#fefefe] shadow-sm hover:shadow-md transition-all duration-150'>
        <TbSearch />
      </button>
    </div>
  )
}
