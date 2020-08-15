import React, {FC} from "react";
import {
    MenuItem,
    NavHeader,
    NavHeaderSectionCenter,
    NavHeaderSectionLeft,
    SectionSearchBar,
    UserSettings
} from './modules';

const Navigation: FC = () => {
    return (
        <NavHeader>
            <NavHeaderSectionLeft>
                <SectionSearchBar/>
            </NavHeaderSectionLeft>
            <NavHeaderSectionCenter>
                <MenuItem classname="active">Home</MenuItem>
                <MenuItem>Categories</MenuItem>
                <MenuItem classname="notify">Subscriptions</MenuItem>
            </NavHeaderSectionCenter>
            <UserSettings/>
        </NavHeader>
    );
}

export default Navigation;