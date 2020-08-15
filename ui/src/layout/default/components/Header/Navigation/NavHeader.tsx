import React, {FC} from "react";

const NavHeader: FC = ({children}) => {
    return (
        <div className="header">{children}</div>
    );
}

export default NavHeader;