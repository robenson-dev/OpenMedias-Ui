import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";

export interface DropdownItemProps {
    children?: React.ReactNode,
    leftIcon?: string,
    rightIcon?: string,
    route?: string, 
    goToMenu?: string
}


const Dropdown: FC = () => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(undefined);

    function calcHeight(el?: any) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const DropdownItem: FC<DropdownItemProps> = ({ children, route, leftIcon, rightIcon, goToMenu }: DropdownItemProps) => {
        return (
            <>
                {
                    route ? (
                        <a href={route} className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>{children}</a>
                        ) :
                        (
                            <a href="#/"  className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
                                <span className="icon-button">{leftIcon}</span>
                                {children}
                                <span className="icon-right">{rightIcon}</span>
                            </a>
                        )
                }
            </>
        )
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem route="/home" goToMenu="home">My Profile</DropdownItem>
                    <DropdownItem route="/studio" goToMenu="home">Studio</DropdownItem>
                    <DropdownItem rightIcon="->" goToMenu="settings">Settings</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon="<-" goToMenu="main" />
                    <DropdownItem leftIcon="" rightIcon="" goToMenu="settings">Settings</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Dropdown;