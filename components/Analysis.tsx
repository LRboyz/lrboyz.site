import { usePostStore } from '~/store/post'

export default function Analysis() {
  return (
    <div className='p-2 bg-[#fefefe]/90 dark:bg-[#2d2d2D]/70 mt-4 rounded-md '>
      <div className='grid grid-cols-12 gap-2'>
        <div className=' col-span-4 flex flex-col items-center'>
          <p className='text-2xl'>88</p>
          <span className='text-xs text-stone-400'>全站文章</span>
        </div>
        <div className=' col-span-4 flex flex-col items-center'>
          <p className='text-2xl'>12.5k</p>
          <span className='text-xs text-stone-400'>全站浏览量</span>
        </div>
        <div className=' col-span-4 flex flex-col items-center'>
          <p className='text-2xl'>666</p>
          <span className='text-xs text-stone-400'>全站留言</span>
        </div>
      </div>
    </div>
  )
}
