import Image from "next/image"

export default function HomePage() {
	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-row gap-10 items-center">
				<Image src="/Tedd_Lee.jpeg" alt="A photo of me." width={100} height={100} className="rounded-3xl"/>
				<div className="flex flex-col">
					<h1 className="text-4xl font-bold">Hey,<br/>I'm Tedd Lee.</h1>
				</div>
			</div>
			<div>
				<ul className="flex flex-col gap-6">
					<li>I am a sophomore pursing Computer Science.</li>
					<li>I attend Macaulay Honors College at Hunter College (CUNY).</li>
					<li>My interests lie in software engineering, data science, AI/ML,<br/>and systems design.</li>
					<li>Despite my internet handle, <a href="/" className="text-green-gc">greencat</a>, I am allergic to cats.</li>
				</ul>
			</div>
		</div>
	)
}