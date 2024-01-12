import { Greeting } from './Greeting';
import { Line } from './Line';
import { Nav } from './Nav';


const Hero = () => {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center h-dvh w-4/5 lg:w-[840px] m-auto'>
        <Greeting />
        <Line />
        <Nav />
    </div>
  )
}

export default Hero;