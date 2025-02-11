type VerticalLineProps = {
  side: 'left' | 'right'
  origin?: 'top' | 'bottom'
}

export function VerticalLine({ side, origin }: VerticalLineProps) {
  return (
    <span
      data-side={side}
      data-origin={origin ?? 'center'}
      className='animate-line-height absolute top-0 -z-10 block h-full w-px bg-white opacity-0 data-[side="left"]:left-0 data-[side="right"]:right-0 data-[origin="bottom"]:origin-bottom data-[origin="center"]:origin-center data-[origin="top"]:origin-top'
    />
  )
}
