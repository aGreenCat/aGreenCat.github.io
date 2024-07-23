'use client'

import { usePathname } from "next/navigation";
import { Greeting } from './Greeting';
import { Line } from './Line';
import { Nav } from './Nav';


const Hero = () => {
  const pathname = usePathname();
  
  return (
    <div className={`relative flex flex-col flex-wrap items-center justify-center w-4/5 lg:w-[840px] mx-auto mb-10 transition-all ease-in-out duration-500 ${pathname=='/' ? 'top-1/2 -translate-y-1/2' : 'top-0'}`}>
        <Greeting />
        <Line />
        <Nav pathname={pathname}/>
    </div>
  )
}

export default Hero;