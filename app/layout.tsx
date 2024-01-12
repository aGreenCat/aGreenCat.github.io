import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import { Hero } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tedd Lee — Personal Website',
  description: 'My personal website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' no-scrollbar'}>
        <Image src='/gc_icon.svg' alt='green cat logo' width={0} height={0} className='background-image' />
        <div className='background-blur'></div>

        <Hero />

        {children}
      </body>
    </html>
  )
}
