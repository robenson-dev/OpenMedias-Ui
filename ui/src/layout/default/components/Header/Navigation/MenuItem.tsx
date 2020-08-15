import React, {FC} from "react";

interface Props{
    children: string,
    classname?: string
}

const MenuItem: FC<Props> = ({children, classname}) => {
    return (
        <div className={'menu-item '+classname}>{children}</div>
    );
}

export default MenuItem;