'use client'
import { SwiperOptions } from 'swiper/types/swiper-options'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CSSProperties, useMemo } from 'react'
import Image from 'next/image'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import './_swiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Post } from '~/sanity/schemas/post'

interface BannerSliderProps {
  posts: Post[]
}

const slideStyles: CSSProperties = {
  width: '100%',
  padding: '',
  height: 210,
  zIndex: -1
}
const sliderSettings: SwiperOptions = {
  modules: [Navigation, Autoplay, Pagination],
  spaceBetween: 10,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  // speed: 500,
  autoplay: {
    //   delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  }
}

export default function BannerList({ posts }: BannerSliderProps) {
  const slides = useMemo(() => {
    return posts.filter(item => item.mainImage)
  }, [posts])

  return (
    <div className='w-full mb-2 rounded-md overflow-hidden relative min-h-[200px] shadow-md'>
      <Swiper {...sliderSettings}>
        {slides.map(slide => (
          <SwiperSlide style={{ ...slideStyles }} key={slide._id} className='transition-all duration-50'>
            <div className={`w-full mr-2 h-full hidden md:block lg:block overflow-hidden relative`}>
              <div className='shadow-light dark:shadow-dark hover:shadow-none hover:dark:shadow-none  absolute right-4 top-4 z-20 bg-[#fefefe] px-4 rounded-md cursor-pointer  hover:bg-[#fefefe] dark:bg-[#2a2a2a]/80 py-1 dark:text-zinc-300/80 text-zinc-600 hover:text-zinc-800 transition-all dark:hover:text-white ease-in-out duration-300'>
                <p className='font-mono font-bold text-sm '>{slide.title}</p>
              </div>

              <Image
                src={slide.mainImage.asset.url}
                alt={slide.description}
                className='object-cover rounded-md hover:scale-110 transition-all duration-150 scale-70'
                placeholder='blur'
                blurDataURL={slide.mainImage.asset.lqip}
                priority
                fill
                sizes='100%'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
