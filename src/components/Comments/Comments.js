import "./Comments.scss";

function Comments({ selectedVideo }) {
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
              <button className="comments__trash-button"></button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Comments;
