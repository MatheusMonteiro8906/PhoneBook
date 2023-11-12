import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Lista telefonica',
  description: 'Desenvolvida por Matheus Monteiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
