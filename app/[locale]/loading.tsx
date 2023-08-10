import { UFOIcon } from '~/components/icons/UFOIcon'
import { Container } from '~/components/ui/Container'

export default function Loading() {
  return (
    <Container className='relative mt-32 min-h-screen lg:mt-32'>
      <div className='flex animate-pulse flex-col items-center justify-center'>
        <UFOIcon className='w-36' />
        <p className='text-sm'>Loading...</p>
      </div>
    </Container>
  )
}
