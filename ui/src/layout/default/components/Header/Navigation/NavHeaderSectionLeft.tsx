import React, {FC} from "react";

const NavHeaderSectionLeft: FC = ({children}) => {
    return (
        <div className="header-left">
            <div className="fas fa-bars btn-menu"/>
            <div className="logo"/>
            {children}
        </div>
    );
}

export default NavHeaderSectionLeft;