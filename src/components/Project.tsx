import { HorizontalLine } from './HorizontalLine'

type ProjectProps = {
  title: string
  image: React.ReactNode
  tags: React.ReactNode
  leftContent: React.ReactNode
  rightContent?: React.ReactNode
  actions: React.ReactNode
}

export function Project({
  image,
  tags,
  title,
  leftContent,
  rightContent,
  actions,
}: ProjectProps) {
  return (
    <article>
      <div className='relative'>
        <HorizontalLine side='top' start='right' />
        {image}
        <HorizontalLine side='bottom' start='left' />
      </div>

      <div className='mt-10 grid grid-cols-1 sm:mt-14 md:grid-cols-[2fr_1fr_2fr] [&_p+p]:mt-2'>
        <div>
          <div className='mb-8 flex flex-wrap gap-3 md:hidden'>{tags}</div>

          <strong className='text-3.5xl font-semibold text-[#DCD7CD]'>
            {title}
          </strong>
          <div className='mt-4'>{leftContent}</div>
          <div className='mt-8 hidden gap-4 md:flex'>{actions}</div>
        </div>
        <div />
        <div>
          <div className='hidden flex-wrap justify-end gap-4 md:flex'>
            {tags}
          </div>
          {rightContent && <div className='mt-4 md:mt-20'>{rightContent}</div>}
        </div>
        <div className='mt-8 flex flex-col gap-4 sm:flex-row md:hidden'>
          {actions}
        </div>
      </div>
    </article>
  )
}
