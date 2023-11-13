import { Badge } from '@nextui-org/badge'
import clsx from 'clsx'
import { BiCoffee, BiComment } from 'react-icons/bi'

export function CoffeeButton() {
  return (
    <BiCoffee
      className={clsx('transition-all duration-50 hover:text-2xl  text-xl mb-4 hover:text-orange-700 cursor-pointer ')}
    />
  )
}
