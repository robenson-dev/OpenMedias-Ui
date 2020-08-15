import React, {FC} from "react";
import {VideoContent, VideoTime, VideoView} from "./index";


interface Props{
    children?: any,
    videoTime?: string,
    videoContent?: string,
    videoViewCount?: string
}

const ListVideoCard: FC<Props> = ({children, videoTime,videoContent, videoViewCount}) => {

    return (
        <div className="video" >
            <VideoTime>{videoTime}</VideoTime>
            {children}
            <VideoContent>{videoContent}</VideoContent>
            <VideoView>{videoViewCount}</VideoView>
        </div>
    );
}

export default ListVideoCard;