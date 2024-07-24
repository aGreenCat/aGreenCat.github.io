import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigator from '@/components/Navigator';
import './globals.css';

const inter = Inter({ 
	subsets: ['latin'], 
	variable: '--font-inter',
})

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
			<body className={`${inter.variable} font-sans h-screen flex items-stretch justify-end px-10 py-24 gap-10 max-w-[1440px] m-auto`}>
				<header className='flex flex-col gap-6 items-end justify-center border-white border-r-2 px-10'>
					<h1 className='text-4xl font-black text-green-gc'>TEDD LEE</h1>
					<Navigator links={[['Home', ''], ['Projects', 'projects'], ['Contact', 'contact']]} base_url='/'/>
				</header>
				<main className='flex grow items-center justify-center'>{children}</main>
			</body>
		</html>
	)
}