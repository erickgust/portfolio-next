'use client'

import { getPointerPosition } from '@/app/utils/getPointerPosition'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function GitHubButton() {
  const t = useTranslations('home.header')

  return (
    <a
      onPointerMove={getPointerPosition({ x: '--x', y: '--y' })}
      href='https://github.com/erickgust'
      rel='noopener noreferrer'
      target='_blank'
      className='group relative inline-block overflow-hidden rounded-full border p-3.5 sm:p-2'
    >
      <span className='absolute left-[calc(var(--x,0)*1px)] top-[calc(var(--y,0)*1px)] inline-block aspect-square w-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[#DCD7CD] transition-transform duration-200 ease-in-out group-hover:scale-150 group-focus-visible:scale-100 group-active:scale-[4]' />
      <Image
        src='/github.svg'
        alt={t('githubAlt')}
        width={16}
        height={16}
        className='max-w-max mix-blend-difference'
        priority
      />
    </a>
  )
}
