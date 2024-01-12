'use client'

import { usePathname } from "next/navigation";
import { Greeting } from './Greeting';
import { Line } from './Line';
import { Nav } from './Nav';


const Hero = () => {
  const pathname = usePathname();
  
  return (
    <div className={`${pathname == '/' ? 'h-dvh' : 'h-48'} flex flex-col flex-wrap items-center justify-center w-4/5 lg:w-[840px] m-auto transition-height ease-in-out duration-800`}>
        <Greeting />
        <Line />
        <Nav pathname={pathname}/>
    </div>
  )
}

export default Hero;