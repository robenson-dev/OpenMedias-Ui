import React, { FC } from "react";
import { VideoSupport } from "./components/VideoSupport";

const VideoPlayer: FC = () => {
  return (
    <>
      <VideoSupport user_image="https://avatarfiles.alphacoders.com/227/22782.jpg">
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          controls
        />
      </VideoSupport>
    </>
  );
};

export default VideoPlayer;
