import { getImageProps } from 'next/image'

type Image = {
  src: string
  alt: string
  width: number
  height: number
  quality?: number
}

type ResponsiveImageProps = {
  desktop: Image
  mobile: Omit<Image, 'alt'>
}

export function ResponsiveImage({ desktop, mobile }: ResponsiveImageProps) {
  const common = { alt: desktop.alt, sizes: '100vw' }

  const {
    props: { srcSet: desktopSrc, width: desktopWidth, height: desktopHeight },
  } = getImageProps({
    ...common,
    width: desktop.width,
    height: desktop.height,
    quality: desktop.quality,
    src: desktop.src,
  })

  const {
    props: { srcSet: mobileSrc, alt, ...rest },
  } = getImageProps({
    ...common,
    width: mobile.width,
    height: mobile.height,
    quality: mobile.quality,
    src: mobile.src,
  })

  return (
    <picture>
      <source
        media='(min-width: 600px)'
        width={desktopWidth}
        height={desktopHeight}
        srcSet={desktopSrc}
      />
      <source
        media='(min-width: 300px)'
        width={rest.width}
        height={rest.height}
        srcSet={mobileSrc}
      />
      <img
        alt={alt}
        {...rest}
        style={{ width: '100%', height: 'auto' }}
        className='rounded-sm sm:rounded'
      />
    </picture>
  )
}
