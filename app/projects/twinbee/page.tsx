import Image from "next/image"
import { SocialIcon } from "react-social-icons"

function TwinBeePage() {
	return (
		<div className="flex flex-col">
			<Image src="https://raw.githubusercontent.com/aGreenCat/TwinBee/main/g47276.png" width={300} height={300} alt="TwinBee" className="rounded-3xl" />
			<div className="text-3xl font-black mt-6 flex flex-row items-center justify-between"><a target="_blank" href="https://github.com/aGreenCat/TwinBee">TwinBee</a> <SocialIcon url="https://github.com/aGreenCat/TwinBee" bgColor="transparent"/></div>
			<div>
				<span className="text-gray-500">2022</span>
				<span className="ml-4 text-gray-500">Tedd Lee and Verit Li</span>
			</div>

			<p className="mt-4 w-0 min-w-[100%]">A remake of <a href="https://en.wikipedia.org/wiki/TwinBee" target="_blank" className="text-green-gc">Twinbee</a>, the '80s Japanese arcade two-person shooter game. Made in <a href="https://processing.org/" target="_blank" className="text-green-gc">Processing</a> (Java).</p>
		</div>
	)
}

export default TwinBeePage