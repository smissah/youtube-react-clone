import React from "react";
import {
  AiOutlineLike,
  AiOutlineMail,
  AiOutlineSend,
  AiOutlineComment,
  AiOutlineDislike,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import "../Styling/VideoToolbar/VideoToolbar.css";
const VideoToolbar = ({ handleToggleDescription }) => {
  return (
    <div className="videoToolbar">
      <AiOutlineInfoCircle
        className="videoToolbar__icon"
        onClick={handleToggleDescription}
      />
      <AiOutlineLike className="videoToolbar__icon" />
      <AiOutlineDislike className="videoToolbar__icon" />
      <AiOutlineComment className="videoToolbar__icon" />
      <AiOutlineSend className="videoToolbar__icon" />
    </div>
  );
};

export default VideoToolbar;
