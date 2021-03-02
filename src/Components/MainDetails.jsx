import React, { useState } from "react";
import "../Styling/MainDetails/MainDetails.css";
const MainDetails = ({ video }) => {
  const [showMore, setShowMore] = useState(false);
  console.log(video);

  if (!video) {
    return "";
  } else {
    const {
      snippet: { title, channelTitle, description },
    } = video;
    return (
      <div className="main__details">
        <h2 className="main__detailsText">
          <div className="main__detailsChannel">
            {channelTitle} {""}
          </div>
          <div className="main__detailsTitle">{title}</div>
        </h2>
      </div>
    );
  }
};

export default MainDetails;
