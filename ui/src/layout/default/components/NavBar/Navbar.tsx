import React, { FC } from "react";

export interface NavbarProps {
    children?: React.ReactNode
}

const Navbar: FC<NavbarProps> = ({ children }: NavbarProps) => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {children}
            </ul>
        </nav>
    );
};

export default Navbar;