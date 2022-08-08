import "./Form.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import React from "react";
import axios from "axios";
import Comments from "../Comments/Comments";

function Form({selectedVideo, renderComments}) {

 const handleCommentSubmit = async (e) => {
    e.preventDefault();

    let comment = {
      name: "Mohan Minaj",
      comment: e.target.form__input.value,
      likes: 0,
      timestamp: Date.now(),
    };

    await axios.post(
      `https://brainflix-project-api.herokuapp.com/videos/${selectedVideo.id}/comments`,
      comment
    );
   renderComments(selectedVideo.id)
  };

    return (
      <section>
        <div className="form__total-comments">
          {`${selectedVideo.comments.length} comments`}
        </div>
        <form className="form" onSubmit={handleCommentSubmit}>
          <div className="form__container">
            <div className="form__left">
              <div className="form__avatar-holder">
                <img className="form__avatar-img" src={avatar}></img>
              </div>
            </div>
            <div className="form__right">
              <div className="form__right-container-tablet">
                <p className="form__title">Join the conversation</p>
                <textarea
                  className="form__input"
                  name="form__input"
                  placeholder="Add a new comment"
                ></textarea>
              </div>
              <button type="submit" className="form__button">
                comment
              </button>
            </div>
          </div>
        </form>

        <Comments renderComments={renderComments} selectedVideo={selectedVideo}/>
      </section>
    );
  }


export default Form;
