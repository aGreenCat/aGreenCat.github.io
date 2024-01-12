import Link from "next/link";

interface NavLinkProps {
    text: string,
    current: boolean,
}

export const NavLink = ({text, current} : NavLinkProps) => {
  return (
    <Link href={`/${text}`} className={`${current ? 'text-pink-600 opacity-100 border-b-2 border-pink-600' : 'text-white opacity-20'} hover:opacity-70 mt-4 font-bold`}>{text}</Link>
  )
}
