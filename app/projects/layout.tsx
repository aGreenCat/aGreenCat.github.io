import Link from "next/link"


export default function ProjectLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex grow self-stretch items-stretch justify-end px-10 py-20 gap-10">
			<nav className='flex flex-col gap-6 items-end justify-center border-slate-400 text-slate-400 border-r-2 px-10'>
				<ul className='flex flex-col items-end gap-6'>
					<li>
						<Link href="/projects">Proj 1</Link>
					</li>
					<li>
						<Link href="/projects">Proj 2</Link>
					</li>
					<li>
						<Link href="/projects">Proj 3</Link>
					</li>
				</ul>
			</nav>
			<main className='flex grow items-center justify-center'>{children}</main>
		</div>
	)
}