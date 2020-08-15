import React, {FC} from "react";
import {VideoItems, ListVideoCard} from "./components";

const VideoList: FC = () => {

    const onMouseEnter = (e: any) => {
        e.target.play();
    };

    const onMouseLeave = (e: any) => {
        e.target.pause();
    };

    return (

            <VideoItems>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n, x) => (
                    <ListVideoCard videoTime="15.13" videoContent="Planning Helps Make" videoViewCount="15.4k views" key={x}>
                        <video muted onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <source
                                src="https://player.vimeo.com/external/368244254.sd.mp4?s=2dc98d46cc5c55913b309928d1d14769f76bc6f9&profile_id=139&oauth2_token_id=57447761"
                                type="video/mp4"
                            />
                        </video>
                    </ListVideoCard>
                ))}
            </VideoItems>

    );
}

export default VideoList;