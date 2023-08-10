import { Nav } from '~/components/Nav'
import Sidebar from '~/components/Sidebar'

interface PostLayoutProps {
  children: React.ReactNode
}
export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <div className='relative mx-2 flex min-h-screen max-w-5xl flex-col  md:mx-4 md:mt-0 md:flex-row lg:mx-auto '>
      <Nav />
      <section className='md:mx-4 relative z-20 mx-auto flex w-full flex-auto flex-col pb-36 md:mt-4 md:pb-36  lg:pb-44'>
        <article className='py-2'>{children}</article>
      </section>
      <Sidebar />
    </div>
  )
}
