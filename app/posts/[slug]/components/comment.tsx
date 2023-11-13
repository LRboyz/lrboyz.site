import { Badge } from '@nextui-org/badge'
import clsx from 'clsx'
import { BiComment } from 'react-icons/bi'

export function CommentButton() {
  return (
    <Badge content='5' size='sm' className='border-none bg-blue-500'>
      <BiComment className={clsx('transition duration-100  text-xl mb-4 hover:text-blue-500 cursor-pointer ')} />
    </Badge>
  )
}
