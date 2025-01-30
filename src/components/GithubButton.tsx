'use client'

import { getPointerPosition } from '@/app/utils/getPointerPosition'
import { useTranslations } from 'next-intl'

export function GitHubButton() {
  const t = useTranslations('home.header')

  return (
    <a
      onPointerMove={getPointerPosition({ x: '--x', y: '--y' })}
      href='https://github.com/erickgust'
      rel='noopener noreferrer'
      target='_blank'
      aria-label={t('githubLinkLabel')}
      className='group relative inline-block shrink-0 overflow-hidden rounded-full border p-3.5 sm:p-2'
    >
      <span className='absolute left-[calc(var(--x,0)*1px)] top-[calc(var(--y,0)*1px)] inline-block aspect-square w-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[#DCD7CD] transition-transform duration-200 ease-in-out group-hover:scale-150 group-focus-visible:scale-100 group-active:scale-[4]' />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='17'
        fill='none'
        viewBox='0 0 16 17'
        className='size-4 mix-blend-difference'
        aria-hidden='true'
        role='img'
      >
        <path
          fill='#DCD7CD'
          d='M8 1.833A6.667 6.667 0 0 0 1.333 8.5a6.685 6.685 0 0 0 4.56 6.333c.334.054.44-.153.44-.333v-1.127c-1.846.4-2.24-.893-2.24-.893-.306-.773-.74-.98-.74-.98-.606-.413.047-.4.047-.4.667.047 1.02.687 1.02.687.58 1.013 1.56.713 1.94.553.06-.433.233-.727.42-.893-1.48-.167-3.033-.74-3.033-3.28 0-.74.253-1.334.686-1.807-.066-.167-.3-.86.067-1.76 0 0 .56-.18 1.833.68.527-.147 1.1-.22 1.667-.22s1.14.073 1.667.22C10.94 4.42 11.5 4.6 11.5 4.6c.367.9.133 1.593.067 1.76.433.473.686 1.067.686 1.807 0 2.546-1.56 3.106-3.046 3.273.24.207.46.613.46 1.233V14.5c0 .18.106.393.446.333A6.686 6.686 0 0 0 14.667 8.5 6.667 6.667 0 0 0 8 1.833Z'
        />
      </svg>
    </a>
  )
}
