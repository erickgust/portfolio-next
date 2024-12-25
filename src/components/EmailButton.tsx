'use client'

import Image from "next/image"

export function EmailButton () {
  async function copyToClipboard (text: string) {
    try {
      await navigator.clipboard.writeText(text)
      console.log('Email copied to clipboard')
    } catch {
      console.error('Failed to copy email to clipboard')
    }
  }

  return (
    <button className="flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none">
      <Image
        aria-hidden
        src="/email.svg"
        alt="Email icon"
        width={14}
        height={14}
      />
      <span className="pt-0.5"
        onClick={(e) => {
          copyToClipboard(e.currentTarget.innerText)
        }}
      >erick.prussak@gmail.com</span>
    </button>
  )
}
