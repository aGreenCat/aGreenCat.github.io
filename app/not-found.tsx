import Image from 'next/image';
 
export default function NotFound() {
  return (
    <div>
      <div className='fixed text-[13rem] text-white font-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20'>404</div>
      <Image src='/gc_icon.svg' width={100} height={100} alt="A green cat" className='fixed top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 -z-30'/>
    </div>
  )
}