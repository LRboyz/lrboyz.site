import { HiFire } from 'react-icons/hi'
import { FiInbox } from 'react-icons/fi'
import { BiSolidCommentDots, BiSolidTime } from 'react-icons/bi'
import { BsFillEyeFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

interface HotPostListProps {}
export default async function HotPostList({}: HotPostListProps) {
  const hotPosts = [] as any[]
  return (
    <div className='flex flex-col my-4 px-3  text-sm  border-0 mr-2 w-full rounded-md bg-[#fefefe]/90 dark:bg-[#2d2d2D]/70 dark:hover:bg-[#2d2d2D]  hover:bg-white p-2 pb-4 text-stone-400'>
      <div className='flex items-center border-b-1 pb-2  cursor-pointer dark:border-zinc-600'>
        <HiFire className='text-lg' />
        <p className='ml-1 font-bold'>热门文章</p>
      </div>
      <div className='mt-2 min-h-[160px] relative'>
        <ul className='text-sm flex flex-col gap-2'>
          {hotPosts.map((post, index) => (
            <li key={post._id} className='  dark:hover:text-stone-300'>
              <p className='cursor-pointer'>
                <i className='mr-2 text-xs '>{index + 1}.</i>
                <span className='hover:underline '>{post.title}</span>
              </p>
              <div className='flex items-center text-xs ml-4 text-zinc-400/50 justify-between'>
                <div className='flex items-center'>
                  <BiSolidTime className='mr-1 w-3' />
                  <span>2天前</span>
                </div>
                <div className='flex items-center'>
                  <BsFillEyeFill className='mr-1 w-3' />
                  <span>1.2k</span>
                </div>
                <div className='flex items-center'>
                  <AiFillHeart className='mr-1 w-3' />
                  <span>{Math.floor(Math.random() * 10)}</span>
                </div>
                <div className='flex items-center'>
                  <BiSolidCommentDots className='mr-1 w-3' />
                  <span>{Math.floor(Math.random() * 10)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {hotPosts.length === 0 && (
          <div className='flex flex-col justify-center items-center mt-10'>
            <FiInbox className='text-2xl text-zinc-400' />
          </div>
        )}
      </div>
    </div>
  )
}