import React from "react";
import { AsideVideoItem } from "../Components";
import "../Styling/Aside/Aside.css";
const Aside = ({ videos, handleVideoSelect }) => {
  console.log(videos);
  return (
    <div className="aside">
      {!videos
        ? ""
        : videos.map((video, index) => {
            const {
              snippet: {
                channelTitle,
                description,
                thumbnails: {
                  default: { url },
                },
                title,
              },
              id: { videoId },
            } = video;
            return (
              <AsideVideoItem
                key={index}
                channelTitle={channelTitle}
                title={title}
                video={video}
                videoId={videoId}
                thumbnail={url}
                description={description}
                handleVideoSelect={handleVideoSelect}
              />
            );
          })}
    </div>
  );
};

export default Aside;
