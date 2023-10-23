import Link from 'next/link'
import { Post } from '~/sanity/schemas/post'
import { BiTime, BiCategoryAlt, BiSolidTime, BiSolidCommentDots, BiHeart } from 'react-icons/bi'
import Image from 'next/image'
import { BsFillEyeFill } from 'react-icons/bs'

export interface PostItemProps {
  post: Post
  view: number
}

export function PostCard({ post, view }: PostItemProps) {
  const { mainImage, title, description, slug, categories } = post

  return (
    <div
      className='relative shadow-sm border-none overflow-hidden dark:bg-[#2d2d2D]/70 dark:hover:bg-[#1d1d1d] bg-[#fefefe]/90 hover:bg-white h-32 w-full p-2 flex no-underline rounded-xl cursor-default ring-[--post-image-bg] hover:shadow-md transition-all duration-150'
      style={
        {
          '--post-image-fg': mainImage.asset.dominant?.foreground,
          '--post-image-bg': mainImage.asset.dominant?.background,
          '--post-image': `url(${mainImage.asset.url}`
        } as React.CSSProperties
      }
    >
      {/* <div className='absolute -right-5 top-0 text-xs bg-sky-600 w-16 text-center transform rotate-45'>原创</div> */}

      <Link
        className='flex-1 mx-2 flex flex-col relative no-underline text-stone-400 dark:hover:text-stone-300'
        href={`/posts/${slug}`}
      >
        <h5 className='m-0 hover:underline cursor-pointer mb-2'>{title}</h5>
        <p className='text-xs  m-0 overflow-hidden text-ellipsis max-h-12 text-stone-400/70'>{description}</p>
        <div className='flex justify-between text-xs absolute bottom-0 w-full text-zinc-400/80 dark:text-gray-400/80 whitespace-nowrap'>
          <div className='flex items-center rounded-lgtransition duration-150 hover:underline'>
            <BiHeart className='text-sm mr-1' />
            <span className=''>9.2k</span>
          </div>

          <div className='flex items-center px-2 rounded-l transition duration-150 hover:underline'>
            <BsFillEyeFill className='mr-1 w-3' />
            <span className=''>{view ?? 0}</span>
          </div>
          <div className='flex items-center  px-2 rounded-lgtransition duration-150 hover:underline'>
            <BiSolidCommentDots className='mr-1 w-3' />
            <span className=''>88</span>
          </div>
          <div className='flex items-center py-1 pr-2 hover:underline '>
            <BiSolidTime className='mr-1 w-3' />
            <span className=''>5天前</span>
          </div>
          {categories && categories.length > 0 && (
            <div className='flex items-center px-2 rounded-l transition duration-150 hover:underline'>
              <BiCategoryAlt className='text-sm mr-1' />
              <span className=''>{categories[0].title}</span>
            </div>
          )}
        </div>
      </Link>
      <div className={`w-40 mr-2 h-full hidden md:block lg:block overflow-hidden  `}>
        <div className='w-full h-full relative'>
          <Image
            src={mainImage.asset.url}
            alt=''
            className='object-cover rounded-md absolute'
            placeholder='blur'
            blurDataURL={mainImage.asset.lqip}
            priority
            fill
          />
        </div>
      </div>
    </div>
  )
}
