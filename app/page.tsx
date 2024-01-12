import { Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Image src='/gc_icon.svg' alt='green cat logo' width={0} height={0} className='background-image' />
      <div className='background-blur'></div>
      <Hero />
    </main>
  )
}
