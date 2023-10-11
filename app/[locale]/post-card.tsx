import Link from 'next/link'
import { Post } from '~/sanity/schemas/post'
import { BiTime, BiCategoryAlt } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineEye, AiOutlineComment } from 'react-icons/ai'
import Image from 'next/image'

export interface PostItemProps {
  post: Post
  views: number
}

export function PostCard({ post, views }: PostItemProps) {
  const { mainImage, title, description, slug, categories } = post

  return (
    <div
      className='relative overflow-hidden dark:bg-[#2d2d2D]/70 dark:hover:bg-[#2d2d2D] bg-[#fefefe]/90 hover:bg-white h-32 w-full p-2 flex no-underline rounded-xl cursor-default ring-[--post-image-bg] hover:shadow-md transition-all duration-150'
      style={
        {
          '--post-image-fg': mainImage.asset.dominant?.foreground,
          '--post-image-bg': mainImage.asset.dominant?.background,
          '--post-image': `url(${mainImage.asset.url}`
        } as React.CSSProperties
      }
    >
      {/* <div className='absolute -right-5 top-0 text-xs bg-sky-600 w-16 text-center transform rotate-45'>原创</div> */}
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

      <Link className='flex-1 flex flex-col relative no-underline' href={`/posts/${slug}`}>
        <h5 className='m-0 hover:underline cursor-pointer mb-2'>{title}</h5>
        <p className='text-xs text-gray-500/80 m-0 overflow-hidden text-ellipsis max-h-12 '>{description}</p>
        <div className='flex justify-between text-xs absolute bottom-0 w-full text-gray-700/70 dark:text-gray-400/80 whitespace-nowrap'>
          <div className='flex items-center py-1 pr-2 hover:underline '>
            <BiTime className='text-sm mr-1 ' />
            <span className=''>5天前</span>
          </div>
          <div className='flex items-center px-2 rounded-lg hover:text-blue-500 transition duration-150 hover:underline'>
            <AiOutlineEye className='text-sm mr-1' />
            <span className=''>{views}</span>
          </div>
          <div className='flex items-center hover:bg-green-100/50 dark:hover:bg-green-400/20  px-2 rounded-lg hover:text-green-500 transition duration-150 hover:underline'>
            <AiOutlineComment className='text-sm mr-1' />
            <span className=''>88</span>
          </div>
          <div className='flex items-center hover:bg-rose-100/50 dark:hover:bg-rose-400/20 px-2 rounded-lg hover:text-rose-500 transition duration-150 hover:underline'>
            <AiOutlineHeart className='text-sm mr-1' />
            <span className=''>9.2k</span>
          </div>
          {categories && categories.length > 0 && (
            <div className='flex items-center hover:bg-purple-100/50 dark:hover:bg-purple-400/20 px-2 rounded-lg hover:text-purple-500 transition duration-150 hover:underline'>
              <BiCategoryAlt className='text-sm mr-1' />
              <span className=''>{categories[0].title}</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
