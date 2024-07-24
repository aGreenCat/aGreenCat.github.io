import Image from "next/image"
import { SocialIcon } from "react-social-icons"

function BrainfudgePage() {
	return (
		<div className="flex flex-col">
			<Image src="https://raw.githubusercontent.com/aGreenCat/BrainFudge/main/Thumbnail.png" width={300} height={300} alt="Brainfudge" className="rounded-3xl" />
			<div className="text-3xl font-black mt-6 flex flex-row items-center justify-between"><a target="_blank" href="https://github.com/aGreenCat/BrainFudge">Brainfudge</a> <SocialIcon url="https://github.com/aGreenCat/Brainfudge" bgColor="transparent"/></div>
			<div>
				<span className="text-gray-500">2023</span>
				<span className="ml-4 text-gray-500">Tedd Lee and Eduardo Lozano</span>
			</div>

			<p className="mt-4 w-0 min-w-[100%]">A visualizer and interpreter for <a href="https://en.wikipedia.org/wiki/Brainfuck" target="_blank" className="text-green-gc">BrainF*ck</a>, the Turing-complete, esoteric programming language. Made in <a href="https://p5js.org/" target="_blank" className="text-green-gc">p5.js</a>.</p>
		</div>
	)
}

export default BrainfudgePage	