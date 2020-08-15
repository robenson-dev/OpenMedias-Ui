import React, {FC} from "react";
import {ButtonIcon, MultiBtn, VideoCard} from './modules';

interface Props{
    children?: any,
    user_image?: any
}

const Support: FC<Props> = ({children, user_image}) => {
    return (
        <>
            <VideoCard>
                <MultiBtn>
                    <ButtonIcon classname="">
                        <img
                            alt="user-profile"
                            src={user_image}
                        />
                    </ButtonIcon>
                    <ButtonIcon classname="fas fa-heart"/>
                    <ButtonIcon classname="fas fa-share-alt"/>
                    <ButtonIcon classname="fas fa-arrow-alt-circle-down"/>
                </MultiBtn>
                <div className="container">
                    {children}
                </div>
            </VideoCard>

        </>
    );
}

export default Support;