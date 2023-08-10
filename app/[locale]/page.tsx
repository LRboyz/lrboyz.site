import Image from 'next/image'
import WelCome from '~/components/WelCome'

import PKG from '~/package.json'
interface HomeProps {
  searchParams: {
    page?: string
    size?: string
  }
}
const { version } = PKG
export default async function Home({ searchParams }: HomeProps) {
  return (
    <div className='w-full flex flex-col items-center h-full justify-center mt-10 '>
      <SayHi />
      <WelCome />
    </div>
  )
}

const SayHi = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `var version = "${version}";
    (${function () {
      console.log(
        `%c Mix Space %c https://github.com/LRboyz `,
        'color: #fff; margin: 1em 0; padding: 5px 0; background: #2980b9;',
        'margin: 1em 0; padding: 5px 0; background: #efefef;'
      )
      console.log(
        `%c lrboy.site ${window.version} %c https://https://lrboyz-site.vercel.app/ `,
        'color: #fff; margin: 1em 0; padding: 5px 0; background: #39C5BB;',
        'margin: 1em 0; padding: 5px 0; background: #efefef;'
      )

      const motto = `
This Personal Space Powered By Mix Space.
Written by TypeScript, Coding with Love.
--------
Stay hungry. Stay foolish. --Steve Jobs
`

      if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
        document.prepend(document.createComment(motto))
      }
    }.toString()})();`
      }}
    />
  )
}

declare global {
  interface Window {
    version: string
  }
}
