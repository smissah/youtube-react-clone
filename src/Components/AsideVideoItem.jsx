import React from "react";
import "../Styling/Aside/SingleVidItem/SingleVidItem.css";
const AsideVideoItem = ({
  description,
  videoId,
  thumbnail,
  title,
  channelTitle,
  handleVideoSelect,
  video,
}) => {
  //   console.log(handleVideoSelect);
  return (
    <div className="videoItem" onClick={() => handleVideoSelect(video)}>
      <img src={thumbnail} alt="" className="videoItem__thumbnail" />

      <div className="videoItem__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AsideVideoItem;
