import React from "react";

const MainDescription = ({
  video: {
    snippet: { description },
  },
}) => {
  console.log(description);
  return (
    <div className="mainDescription" style={{ fontSize: "1.4rem" }}>
      {description}
    </div>
  );
};

export default MainDescription;
