import Image from 'next/image'

type TechTagProps = {
  color: `#${string}`
  title: string
  img: {
    src: string
    alt: string
  }
}

export function TechTag(props: TechTagProps) {
  return (
    <span
      style={{
        ['--tag-color' as string]: props.color,
      }}
      className='inline-flex items-center justify-center gap-2.5 rounded-full border border-[--tag-color] px-4 py-2 text-sm leading-none text-[--tag-color]'
    >
      <Image
        aria-hidden
        src={props.img.src}
        alt={props.img.alt}
        width={16}
        height={16}
      />
      <span className='pt-0.5'>{props.title}</span>
    </span>
  )
}
