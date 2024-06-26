import { Card } from '@/components'

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    month: number;
    year: number;
}

const page = () => {
    let projects : Project[] = [
        {
            title: "Pulley Simulator",
            description: "A simulation of various pulley configurations, made with VPython.",
            image: "https://raw.githubusercontent.com/aGreenCat/PulleySimulator/main/Thumbnail.png",
            link: "https://github.com/aGreenCat/PulleySimulator",
            month: 6,
            year: 2023,
        },
        {
            title: "BrainFudge",
            description: "A visualizer for Brainf*ck code, made in P5.js.",
            image: "https://raw.githubusercontent.com/aGreenCat/BrainFudge/main/Thumbnail.png",
            link: "https://github.com/aGreenCat/BrainFudge",
            month: 5,
            year: 2023,
        },
        {
            title: "Twinbee",
            description: "A remake of a Japanese arcade-style game from the 80’s.",
            image: "https://raw.githubusercontent.com/aGreenCat/TwinBee/main/g47276.png",
            link: "https://github.com/aGreenCat/TwinBee",
            month: 6,
            year: 2022,
        },
    ]

    return (
        <div className="w-3/5 lg:w-[620px] mx-auto">
            {projects.map((project : Project) => {
                return <Card {...project}/>
            })}
        </div>
    )
}

export default page