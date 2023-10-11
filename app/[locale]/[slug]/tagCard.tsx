'use client'

import { Divider } from '@nextui-org/divider'
import { GoInbox } from 'react-icons/go'
import { getKeyValue } from '~/lib/transformer'
import { useTagStore } from '~/store/tagSlice'

interface TagCardProps {
  slug: string
}

export default function TagCard({ slug }: TagCardProps) {
  const { Tags } = useTagStore()
  const currTag = Tags.filter(tag => tag.slug.current === slug)[0]

  if (!currTag) {
    return (
      <div className='w-full flex justify-center items-center flex-col text-zinc-600'>
        <GoInbox className='text-3xl ' />
        <span className='text-sm'>Empty ~</span>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-center border dark:border-zinc-600 h-40 rounded-md flex-col'>
      {/* <i className='mr-1'> {currTag.attributes && TAG_ICON_LIST[getKeyValue(currTag.attributes, 'icon')]}</i> */}
      {currTag.attributes && <i className={`text-5xl iconfont ${getKeyValue(currTag.attributes, 'icon')} `} />}
      <div className='flex items-center gap-4 mt-4 text-sm'>
        <p># {slug}</p>
        <Divider orientation='vertical' />
        <p>{currTag.description}</p>
      </div>
    </div>
  )
}
