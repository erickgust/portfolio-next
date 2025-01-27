import Image from 'next/image'
import { EmailText } from './EmailText'

export function EmailButton() {
  return (
    <button className='flex items-center justify-center gap-2.5 rounded-full border px-4 py-2 leading-none'>
      <Image
        aria-hidden
        src='/email.svg'
        alt='Email icon'
        width={14}
        height={14}
        priority
      />
      <EmailText>erick.prussak@gmail.com</EmailText>
    </button>
  )
}
