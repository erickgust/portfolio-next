import localFont from 'next/font/local'
import type { Metadata } from 'next'
import '../globals.css'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

const font = localFont({
  src: '../fonts/FKTGnarly_Wght-VF.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Erick Gustavo - Web Developer',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  if (!routing.locales.includes(locale as never)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang='en'>
      <body className={`${font.className} font-normal antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
