import React from "react";
import TrashIcon from "../TrashIcon/TrashIcon";
import "./Comments.scss";
import axios from "axios";

function Comments({ selectedVideo, renderComments}) {
  
  const handleDelete = async (myTimestamp) => {
    await axios.delete(
     `https://brainflix-project-api.herokuapp.com/videos/${selectedVideo.id}/${myTimestamp}/delete`
    );
    renderComments(selectedVideo.id)
  };

  return selectedVideo.comments.map((comment) => {
    return (
      <div className="comments__container" key={Math.random()}>
        <div className="comments__image-placeholder"></div>
        <div className="comments__section--right">
          <div className="comments__text-wrapper">
            <h3 className="comments__name">{comment.name}</h3>
            <div className="comments__date">
              {new Date(comment.timestamp).toLocaleDateString()}
            </div>
          </div>
          <p className="comments__comment">{comment.comment}</p>
          <div className="comments__buttons">
            <div className="comments__like">
              <button className="comments__like-buttons">
                <div className="comments__like-icon"></div>
                <span className="comments__like-counter">{comment.likes}</span>
              </button>
            </div>
            <div className="comments__trash">
              <TrashIcon handleDelete={handleDelete} commentTimestamp={comment.timestamp}/>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Comments;
