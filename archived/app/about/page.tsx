import Image from 'next/image'

const page = () => {
  return (
    <div className="flex flex-row flex-wrap w-3/4 md:w-[650px] mt-24 mx-auto gap-8 justify-around md:justify-between">
        <Image src="/Rectangle3.png" alt="Me" width={300} height={300}/>
        <div className="w-[300px]">
            <div>Hey! my name is Tedd Lee, and I’m a first-year undergraduate student attending Macaulay Honors College
                at
                Hunter College (CUNY). In middle school, my computer science teacher introduced me to Scratch,
                hackathons,
                game jams, and I’ve been hooked ever since.
            </div>
            <div>After years of exploration, I have grown to appreciate the creative freedom and enjoy the problem
                solving in this broad field of CS. Thus, I am now pursuing a computer science degree and building a
                career for the future.
            </div>
        </div>
    </div>
  )
}

export default page