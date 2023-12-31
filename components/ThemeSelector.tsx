'use client'

import { Select } from '~/components/ui/Select'
import { useTheme } from 'next-themes'
import React from 'react'
import { TbCircleHalf2, TbMoon, TbSun } from 'react-icons/tb'

const themes = [
  {
    label: 'Light',
    value: 'light',
    icon: TbSun
    // icon: TbSun,
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: TbMoon
    // icon: TbMoon,
  },
  {
    label: 'System',
    value: 'system',
    icon: TbCircleHalf2
    // icon: TbCircleHalf2,
  }
]
export function ThemeSelector() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme, theme } = useTheme()

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <Select.Root value={theme} defaultValue='system' onValueChange={setTheme}>
      <Select.Trigger
        className='flex w-fit justify-start space-x-1  font-bold text-stone-400 transition-colors hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-200 md:w-40'
        aria-label={''}
      >
        <Select.Value placeholder={'Theme Placeholder'} />
      </Select.Trigger>
      <Select.Content position='popper'>
        {themes.map(({ label, value, icon: Icon }) => (
          <Select.Item key={value} value={value}>
            <div className='inline-flex select-none items-center space-x-2 font-bold pt-1'>
              <Icon className='h-4 w-4 stroke-current' />
              <span className=' whitespace-nowrap'>{label}</span>
            </div>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  )
}
