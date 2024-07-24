import Navigator from "@/components/Navigator"


export default function ProjectLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex grow self-stretch items-stretch justify-end px-10 py-20 gap-10">
			<div className="flex flex-col gap-6 items-end justify-center border-slate-500 border-r-2 px-10">
				<Navigator links={[['Pulley Simulator', 'pulley-simulator'], ['Twinbee', 'twinbee'], ['BrainFudge', 'brainfudge']]} base_url='/projects/'/>
			</div>
			<main className='flex grow items-center justify-center'>{children}</main>
		</div>
	)
}