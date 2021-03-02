import React, { Component } from "react";
import {
  AiOutlineLike,
  AiOutlineMail,
  AiOutlineSend,
  AiOutlineComment,
  AiOutlineDislike,
} from "react-icons/ai";
import "../Styling/VideoToolbar/VideoToolbar.css";
class VideoToolbar extends Component {
  state = {};
  render() {
    return (
      <div className="videoToolbar">
        <AiOutlineLike className="videoToolbar__icon" />
        <AiOutlineDislike className="videoToolbar__icon" />
        <AiOutlineComment className="videoToolbar__icon" />
        <AiOutlineSend className="videoToolbar__icon" />
      </div>
    );
  }
}

export default VideoToolbar;
