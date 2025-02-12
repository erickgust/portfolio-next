'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function useHorizontalLineScrollAnimation(
  start: 'left' | 'right',
  isLastElement?: boolean,
) {
  const lineRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: lineRef.current,
        start: `top ${isLastElement ? 'bottom' : '80%'}`,
        end: 'bottom top',
        invalidateOnRefresh: true,
        once: true,
        onEnter: () => {
          gsap.fromTo(
            lineRef.current,
            {
              scaleX: 0,
              opacity: 0.3,
              transformOrigin: start,
            },
            {
              scaleX: 1,
              opacity: 0.05,
              duration: 1,
            },
          )
        },
      })
    },
    { scope: lineRef },
  )

  return lineRef
}

type HorizontalLineProps = {
  side: 'top' | 'bottom'
  start: 'left' | 'right'
  isLastElement?: boolean
}

export function HorizontalLine({
  side,
  start,
  isLastElement,
}: HorizontalLineProps) {
  const lineRef = useHorizontalLineScrollAnimation(start, isLastElement)

  return (
    <span
      aria-hidden
      ref={lineRef}
      data-side={side}
      data-start={start}
      className='absolute -z-10 block h-px w-screen bg-white opacity-0 data-[side="bottom"]:bottom-0 data-[side="top"]:top-0 data-[start="left"]:right-1/2 data-[start="right"]:left-1/2 data-[start="left"]:translate-x-1/2 data-[start="right"]:-translate-x-1/2'
    />
  )
}
