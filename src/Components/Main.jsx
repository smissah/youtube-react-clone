import React from "react";
import { MainDetails } from "../Components";
import "../Styling/Main/Main.css";

const Main = ({ videos, video }) => {
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
      </div>
      <MainDetails />
    </React.Fragment>
  );
};

export default Main;
