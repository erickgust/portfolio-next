type HorizontalLineProps = {
  side: 'top' | 'bottom'
  start: 'left' | 'right'
}

export function HorizontalLine({ side, start }: HorizontalLineProps) {
  return (
    <span
      data-side={side}
      data-start={start}
      className='animate-line-width absolute -z-10 block h-px w-screen bg-white data-[side="bottom"]:bottom-0 data-[side="top"]:top-0 data-[start="left"]:right-1/2 data-[start="right"]:left-1/2 data-[start="left"]:translate-x-1/2 data-[start="right"]:-translate-x-1/2'
    />
  )
}
