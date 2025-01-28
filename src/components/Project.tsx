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
        <span className='absolute left-1/2 top-0 -z-10 block h-px w-screen -translate-x-1/2 bg-[#1B1B1B]' />
        {image}
        <span className='absolute bottom-0 left-1/2 -z-10 block h-px w-screen -translate-x-1/2 bg-[#1B1B1B]' />
      </div>

      <div className='mt-14 grid grid-cols-[2fr_1fr_2fr] [&_p+p]:mt-2'>
        <div>
          <strong className='text-3.5xl font-semibold leading-none text-[#DCD7CD]'>
            {title}
          </strong>
          <div className='mt-4'>{leftContent}</div>
          <div className='mt-8 flex gap-4'>{actions}</div>
        </div>
        <div />
        <div>
          <div className='flex flex-wrap justify-end gap-4'>{tags}</div>
          {rightContent && <div className='mt-20'>{rightContent}</div>}
        </div>
      </div>
    </article>
  )
}
