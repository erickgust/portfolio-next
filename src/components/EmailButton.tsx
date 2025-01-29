import { EmailText } from './EmailText'

export function EmailButton() {
  return (
    <button className='flex w-full items-center justify-center gap-2.5 rounded-full border px-4 py-3 text-base !leading-none text-[#DCD7CD] sm:max-w-min sm:py-2 sm:text-sm'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='15'
        fill='none'
        viewBox='0 0 14 15'
        className='shrink-0'
      >
        <path
          stroke='#DCD7CD'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12.5 2.25h-11a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8.5a1 1 0 0 0-1-1Z'
        />
        <path
          stroke='#DCD7CD'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m.5 3.5 5.86 5a1 1 0 0 0 1.28 0l5.86-5'
        />
      </svg>

      <EmailText>erick.prussak@gmail.com</EmailText>
    </button>
  )
}
