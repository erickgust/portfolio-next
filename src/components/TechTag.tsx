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
      className='text-[--tag-color] border-[--tag-color] inline-flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none text-sm'
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
