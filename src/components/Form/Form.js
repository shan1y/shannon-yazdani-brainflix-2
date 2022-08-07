import "./Form.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import React from "react";
import axios from "axios";
import Comments from "../Comments/Comments";

class Form extends React.Component {
  state = {
    comment: "",
  };

  selectedVideo = this.props.selectedVideo;

  handleCommentSubmit = async (e) => {
    e.preventDefault();

    this.setState({
      comment: e.target.form__input.value,
    });

    let comment = {
      name: "Mohan Minaj",
      comment: e.target.form__input.value,
      likes: 0,
      timestamp: Date.now(),
    };

    await axios.post(
      `https://brainflix-project-api.herokuapp.com/videos/${this.props.selectedVideo.id}/comments`,
      comment
    );
  };

  render() {
    return (
      <section>
        <div className="form__total-comments">
          {`${this.props.selectedVideo.comments.length} comments`}
        </div>
        <form className="form" onSubmit={this.handleCommentSubmit}>
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

        <Comments selectedVideo={this.props.selectedVideo} />
      </section>
    );
  }
}

export default Form;
