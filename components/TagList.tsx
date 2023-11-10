import { FiInbox } from 'react-icons/fi'
import { TbBrandNextjs, TbTag } from 'react-icons/tb'
import { BiLogoFlask, BiLogoPython, BiLogoReact, BiLogoVuejs } from 'react-icons/bi'
import { ReactNode } from 'react'
import { getKeyValue } from '~/lib/transformer'
import clsx from 'clsx'
import Link from 'next/link'
import { getTags } from '~/sanity/queries'

interface TagListProps {}

type TagList = Record<string, ReactNode>

export const TAG_ICON_LIST: TagList = {
  'icon-vue': <BiLogoVuejs size={18} className=' w-4' />,
  'icon-react': <BiLogoReact size={18} className=' w-4' />,
  'icon-flask': <BiLogoFlask size={18} className=' w-4' />,
  'icon-python': <BiLogoPython size={18} className=' w-4' />,
  'icon-nextjs': <TbBrandNextjs size={18} className=' w-4' />
}

export default async function TagList({}: TagListProps) {
  const tags = await getTags()

  return (
    <div className='flex flex-col my-4  text-sm  border-0 px-3 mr-2 w-full rounded-md dark:bg-[#2d2d2D]/70 dark:hover:bg-[#2d2d2D] bg-[#fefefe] hover:bg-white p-2 pb-4 text-stone-400'>
      <div className='flex items-center border-b-1 pb-2 dark:border-zinc-600'>
        <TbTag className='text-lg' />
        <p className='ml-1 font-bold'>标 签</p>
      </div>
      <div className='flex flex-col mt-2 min-h-[160px] overflow-hidden'>
        <ul className='text-sm flex flex-wrap gap-2'>
          {tags
            .filter(tag => tag.article_count! > 0)
            .map(tag => {
              const isActive = false

              return (
                <Link
                  href={`/?tag=${tag.slug.current}`}
                  key={tag._id}
                  className={clsx(
                    'flex items-center border px-2 dark:border-zinc-600 dark:hover:border-zinc-400 rounded-md hover:shadow-md transition-all duration-150 cursor-pointer',
                    isActive ? 'bg-blue-500 text-white' : ''
                  )}
                >
                  {tag.attributes && <i className={`iconfont text-xs mr-1 ${getKeyValue(tag.attributes, 'icon')}`} />}

                  <span className=' whitespace-nowrap text-xs'>
                    {tag.title} ({tag.article_count || 0})
                  </span>
                </Link>
              )
            })}
        </ul>
        {tags.length === 0 && (
          <div className='flex flex-col justify-center items-center mt-10 '>
            <FiInbox className='text-2xl' />
            <p>Empty ~</p>
          </div>
        )}
      </div>
    </div>
  )
}
