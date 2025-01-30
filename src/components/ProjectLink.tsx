'use client'

import { getPointerPosition } from '@/app/utils/getPointerPosition'
import Image from 'next/image'

type ProjectLinkProps = {
  href: string
  type: 'github' | 'live'
  children: React.ReactNode
}

export function ProjectLink({ href, type, children }: ProjectLinkProps) {
  const icon = type === 'github' ? '/repository.svg' : '/arrow.svg'
  const alt = type === 'github' ? 'GitHub icon' : 'Link icon'

  const color = type === 'github' ? '#8E9AE1' : '#E7BE6C'

  return (
    <a
      href={href}
      onPointerMove={getPointerPosition({ x: '--x', y: '--y' })}
      rel='noopener noreferrer'
      target='_blank'
      style={{
        ['--color' as string]: color,
      }}
      className='group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-3xl border border-[--color] px-4 py-3 text-base leading-none text-[--color] md:py-2 md:text-sm'
    >
      <span className='absolute left-[calc(var(--x,0)*1px)] top-[calc(var(--y,0)*1px)] inline-block aspect-square w-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[--color] transition-transform duration-200 ease-in-out group-hover:scale-150 group-focus-visible:scale-100 group-active:scale-[4]' />
      <Image
        aria-hidden
        src={icon}
        alt={alt}
        width={14}
        height={14}
        className='relative z-10 size-4 mix-blend-difference md:size-3.5'
      />
      <span className='relative z-10 pt-0.5 mix-blend-difference'>
        {children}
      </span>
    </a>
  )
}
