import React from "react";
import { MainDetails, VideoToolbar } from "../Components";
import "../Styling/Main/Main.css";

const Main = ({ video }) => {
  // console.log(video);

  if (video) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  }

  return (
    <React.Fragment>
      <div className="main">
        {!video ? (
          <span className="loading">Loading... </span>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title="Video Player"
          />
        )}
        <div className="main__underVideo">
          <MainDetails video={video} /> {video && <VideoToolbar />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
