import React, {FC} from "react";

interface Props {
    children?: any;
    classname?: string;
}

const ButtonIcon: FC<Props> = ({children, classname}): any => {
    return (
        <>
            {children ? <button className={classname}>{children}</button> : <button className={classname}/>}
        </>
    );
};

export default ButtonIcon;