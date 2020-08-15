import React, {FC} from "react";


const MultiBtn: FC = ({children}) => {
    return (
        <div className="multi-button">
            {children}
        </div>
    );
}

export default MultiBtn;