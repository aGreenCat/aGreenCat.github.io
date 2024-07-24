import Image from "next/image"
import { SocialIcon } from "react-social-icons"

function PulleySimulatorPage() {
	return (
		<div className="flex flex-col">
			<Image src="https://raw.githubusercontent.com/aGreenCat/PulleySimulator/main/Thumbnail.png" width={300} height={300} alt="Pulley Simulator" className="rounded-3xl" />
			<div className="text-3xl font-black mt-6 flex flex-row items-center justify-between"><a target="_blank" href="https://github.com/aGreenCat/PulleySimulator">Pulley Simulator</a> <SocialIcon url="https://github.com/aGreenCat/PulleySimulator" bgColor="transparent"/></div>
			<div>
				<span className="text-gray-500">2023</span>
				<span className="ml-4 text-gray-500">Tedd Lee and Eduardo Lozano</span>
			</div>

			<p className="mt-4 w-0 min-w-[100%]">A simulation of a massive-pulley system physics with preset configurations. Made in <a href="https://vpython.org/" target="_blank" className="text-green-gc">VPython</a>.</p>
		</div>
	)
}

export default PulleySimulatorPage