interface NavLinkProps {
    text: string,
}

export const NavLink = ({text} : NavLinkProps) => {
  return (
    <a className="text-white opacity-20 hover:opacity-100 mt-4">{text}</a>
  )
}
