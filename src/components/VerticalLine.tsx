'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function useVerticalLineScrollAnimation() {
  const lineRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: lineRef.current,
        start: 'top bottom',
        end: 'bottom top',
        invalidateOnRefresh: true,
        once: true,
        onEnter: () => {
          gsap.fromTo(
            lineRef.current,
            {
              scaleY: 0,
              opacity: 0.3,
            },
            {
              scaleY: 1,
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

type VerticalLineProps = {
  side: 'left' | 'right'
  origin?: 'top' | 'bottom'
}

export function VerticalLine({ side, origin }: VerticalLineProps) {
  const lineRef = useVerticalLineScrollAnimation()
  return (
    <span
      data-side={side}
      ref={lineRef}
      data-origin={origin ?? 'center'}
      className='absolute top-0 -z-10 block h-full w-px bg-white opacity-0 data-[side="left"]:left-0 data-[side="right"]:right-0 data-[origin="bottom"]:origin-bottom data-[origin="center"]:origin-center data-[origin="top"]:origin-top'
    />
  )
}
