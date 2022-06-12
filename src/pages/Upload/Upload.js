import "./Upload.scss";
import "../../styles/partials/_global.scss";
import bike from "../../assets/Images/Upload-video-preview.jpg";
import React from "react";
import axios from "axios";

const styles = {
  transition: "all 1s ease-in-out",
};

class Upload extends React.Component {
  state = { uploadState: true, opacity: 0, padding: 0 };

  handleSubmit = async (event) => {
    event.preventDefault();
    let movieTitle = event.target.title.value;
    let movieDescription = event.target.description.value;
    let newMovieData = {
      title: movieTitle,
      channel: "Mohan Muruge",
      description: movieDescription,
      timestamp: Date.now(),
    };
    await axios.post("http://localhost:8080/videos", newMovieData);
    this.setState({ uploadState: true, opacity: 1, padding: "1rem" });
    setTimeout(() => {
      this.setState({ uploadState: true, opacity: 0, padding: "0rem" });
    }, 2000);
    setTimeout(() => {
      this.props.history.push("/");
    }, 3000);
  };

  render() {
    return (
      <div>
        {this.state.uploadState && (
          <div
            className="upload__success-bar"
            style={{
              ...styles,
              opacity: this.state.opacity,
              padding: this.state.padding,
            }}
          >
            Upload Succesful
          </div>
        )}

        <form onSubmit={this.handleSubmit} className="upload">
          <div className="upload__container">
            <h1 className="upload__title">Upload Video</h1>
            <div className="divider"></div>
            <div className="upload__form-container">
              <div>
                <h2 className="upload__sub-title">Video Thumbnail</h2>
                <img
                  className="upload__img"
                  src={bike}
                  alt="zooming bike first person view"
                />
              </div>
              <div className="upload__inputs">
                <label htmlFor="title" className="upload__label">
                  title your video
                </label>
                <input
                  className="upload__user-title"
                  placeholder="Add a title to your video"
                  name="title"
                ></input>
                <label htmlFor="description" className="upload__label">
                  Add a video description
                </label>
                <textarea
                  className="upload__user-description"
                  placeholder="Add a description to your video"
                  name="description"
                ></textarea>
              </div>
            </div>
            <div className="divider"></div>
            <div className="buttons">
              <button className="buttons__publish">Publish</button>

              <button
                onClick={() => this.props.history.push("/")}
                type="button"
                className="buttons__cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Upload;
