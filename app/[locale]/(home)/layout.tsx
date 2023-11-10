import { Nav } from '~/components/Nav'
import Sidebar from '~/components/Sidebar'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex justify-between w-full'>
      <Nav />
      <Sidebar className='order-2' />
      <main className='order-1 flex-1 overflow-hidden relative mx-4 pt-10'>{children}</main>
    </div>
  )
}
