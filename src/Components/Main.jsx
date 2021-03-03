import React, { useState } from "react";
import { MainDetails, VideoToolbar, MainDescription } from "../Components";
import "../Styling/Main/Main.css";

const Main = ({ video }) => {
  // console.log(video);
  const [description, setDescription] = useState(false);

  const handleToggleDescription = () => {
    setDescription(!description);
  };

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
          <div className="main__underVideoTitleAndToolbar">
            <MainDetails video={video} />{" "}
            {video && (
              <VideoToolbar handleToggleDescription={handleToggleDescription} />
            )}
          </div>
          <div className="main__underVideoDescription">
            {description && <MainDescription video={video} />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
