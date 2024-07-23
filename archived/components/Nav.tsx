import { NavLink } from "./NavLink";

interface NavProps {
    pathname: string,
}

export const Nav = ({pathname} : NavProps) => {
    let navLinks : string[] = ["about", "blog", "projects", "contact"];

    return (
        <div className="flex flex-wrap w-4/5 lg:w-3/5 justify-between">
            {navLinks.map((link, index) => 
                <NavLink key={index} text={link} current={pathname == `/${link}`}/>
            )}
        </div>
    )
}
