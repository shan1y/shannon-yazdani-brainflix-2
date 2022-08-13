import React from "react";
import "./LikeIcon.scss";

function LikeIcon({handleLike, commentTimestamp}) {
  return (
    <>
      <button
        className="comments__like-icon"
        onClick={() => {
          handleLike(commentTimestamp);
        }}
      ></button>
    </>
  );
}

export default LikeIcon;
