import { Badge } from '@nextui-org/badge'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import clsx from 'clsx'

interface HeartProps {
  onLike: () => void
  isLike: boolean
}
export function HeartButton({ onLike, isLike }: HeartProps) {
  console.log(isLike, '2222')
  return (
    <Badge content='5' size='sm' className='border-none' color={isLike ? 'danger' : 'default'}>
      <BsHeart
        onClick={onLike}
        className={clsx('transition duration-100  text-xl mb-4 hover:text-[#F31260] cursor-pointer ', {
          'text-[#F31260]': isLike
        })}
      />
    </Badge>
  )
}
