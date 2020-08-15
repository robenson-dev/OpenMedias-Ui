import React, {FC} from "react";

const VideoCard: FC = ({children}) => {
    return (
        <div className="video-container">
            <div className="card">
                {children}
            </div>
        </div>
    )
}

export default VideoCard;