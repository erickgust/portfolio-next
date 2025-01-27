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
      rel='noopener noreferrer'
      target='_blank'
      style={{
        ['--color' as string]: color,
      }}
      className='group relative inline-flex items-center justify-center gap-2.5 py-2 px-4 rounded-full border border-[--color] text-[--color] leading-none text-sm overflow-hidden'
    >
      <span className='absolute inset-0 bg-[--color] origin-left scale-x-0 rounded-full transition-transform duration-1000 ease-in-out group-hover:scale-x-100 supports-[transition-timing-function:linear(0,1)]:group-hover:duration-1000 supports-[transition-timing-function:linear(0,1)]:group-hover:[transition-timing-function:linear(0,0.5007_7.21%,0.7803_12.29%,0.8883_14.93%,0.9724_17.63%,1.0343_20.44%,1.0754_23.44%,1.0898_25.22%,1.0984_27.11%,1.1014_29.15%,1.0989_31.4%,1.0854_35.23%,1.0196_48.86%,1.0043_54.06%,0.9956_59.6%,0.9925_68.11%,1)]' />

      <Image
        aria-hidden
        src={icon}
        alt={alt}
        width={14}
        height={14}
        className='relative z-10 mix-blend-difference'
      />
      <span className='pt-0.5 relative z-10 mix-blend-difference'>
        {children}
      </span>
    </a>
  )
}
