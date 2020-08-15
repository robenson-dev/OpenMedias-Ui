import React, {FC} from "react";

const VideoItems: FC = ({children}) => {
    return  <div className="video-container"><div className="videos">{children}</div></div>
}

export default VideoItems;