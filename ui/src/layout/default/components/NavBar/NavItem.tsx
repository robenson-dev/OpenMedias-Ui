import React, { FC, useState } from "react";

export interface NavItemProps {
    children?: React.ReactNode,
    icon?: string,
}

const NavItem: FC<NavItemProps> = ({ children, icon }: NavItemProps) => {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#/" className="icon-button" onClick={() => setOpen(!open)}>
                {icon}
            </a>

            {open && children}
        </li>
    )

}

export default NavItem;