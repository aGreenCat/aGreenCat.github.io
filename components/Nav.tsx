import { NavLink } from "./NavLink";

export const Nav = () => {
    let navLinks : string[] = ["about", "blog", "projects", "contact"];
    return (
        <div className="flex flex-wrap w-4/5 lg:w-3/5 justify-between">
            {navLinks.map((link, index) => 
                <NavLink key={index} text={link} />
            )}
        </div>
    )
}
