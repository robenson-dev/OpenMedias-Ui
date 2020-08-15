import React, { FC } from 'react';
import Navbar from './Navbar';
import NavItem from './NavItem';
import Dropdown from './DropDown';

const NavBarElement: FC = () => {
    return (
        <>
            <Navbar>
                <NavItem icon="(^_^)">
                    <Dropdown/>
                </NavItem>
            </Navbar>
        </>
    );
}

export default NavBarElement;