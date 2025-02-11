type VerticalLineProps = {
  side: 'left' | 'right'
}

export function VerticalLine({ side }: VerticalLineProps) {
  return (
    <span
      data-side={side}
      className='animate-line-height absolute bottom-0 -z-10 block h-full w-px origin-bottom bg-white opacity-0 data-[side="left"]:left-0 data-[side="right"]:right-0'
    />
  )
}
