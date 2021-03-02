import React from "react";
import "../Styling/Aside/SingleVidItem/SingleVidItem.css";
const AsideVideoItem = ({
  videoId,
  thumbnail,
  title,
  channelTitle,
  handleVideoSelect,
}) => {
  //   console.log(handleVideoSelect);
  return (
    <div className="videoItem" onClick={() => handleVideoSelect(videoId)}>
      <img src={thumbnail} alt="" className="videoItem__thumbnail" />

      <div className="videoItem__text">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default AsideVideoItem;
