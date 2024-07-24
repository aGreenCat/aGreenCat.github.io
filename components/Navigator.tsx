'use client'

import { usePathname } from "next/navigation"
import Link from 'next/link';

type NavigatorProps = {
	links: [string, string][],
	base_url: string,
	main_color?: number,
	lighter_color?: number,
}

function Navigator(props: NavigatorProps) {
	const pathname = usePathname()

	return (
		<nav>
			<ul className='flex flex-col items-end gap-6'>
				{
					props.links.map(([name, url]) => {
						let path = `${props.base_url}${url}`

						return (
							<li key={name}>
								<Link href={path} className={pathname === path  ? `text-slate-${props.main_color || 50}` : `text-slate-${props.lighter_color || 500}`}>{name}</Link>
							</li>
						)
					})
				}
			</ul>
		</nav>
	)
}

export default Navigator
