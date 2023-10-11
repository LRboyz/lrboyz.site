import React from 'react'

import Image from 'next/image'
import Button from './ui/Button'

type Props = {
  title: string
  description?: React.ReactNode
  image: any
  primaryButton?: {
    icon?: any
    text: string
    onClick: () => void
  }
  secondaryButton?: React.ReactNode
  isFullScreen?: boolean
}

export const EmptyState: React.FC<Props> = ({
  title,
  description,
  image,
  primaryButton,
  secondaryButton,
  isFullScreen = true
}) => (
  <div className={`h-full w-full mx-auto grid place-items-center p-8 ${isFullScreen ? 'md:w-4/5 lg:w-3/5' : ''}`}>
    <div className='text-center flex flex-col items-center w-full'>
      <Image src={image} className='w-52 sm:w-60' alt={primaryButton?.text ?? ''} />
      <h6 className='text-xl font-semibold mt-6 sm:mt-8 mb-3'>{title}</h6>
      {description && <p className='text-custom-text-300 mb-7 sm:mb-8'>{description}</p>}
      <div className='flex items-center gap-4'>
        {primaryButton && (
          <Button className='flex items-center gap-1.5' onClick={primaryButton.onClick}>
            {primaryButton.icon}
            {primaryButton.text}
          </Button>
        )}
        {secondaryButton}
      </div>
    </div>
  </div>
)
