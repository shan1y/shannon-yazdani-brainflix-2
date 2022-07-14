import "./Upload.scss";
import "../../styles/partials/_global.scss";
import bike from "../../assets/Images/Upload-video-preview.jpg";
import React from "react";
import axios from "axios";

const styles = {
  transition: "all 1s ease-in-out",
};

class Upload extends React.Component {
  state = {
    uploadState: true,
    opacity: 0,
    padding: 0,
    errors: { titleLength: 0, descriptionLength: 0 },
    initialPageTitle: null,
    initalPageDescription: null,
  };

  //form validation function
  formValidation = (movieTitle, movieDescription) => {
    let isValid = true;
    const errors = {};
    //always sets initiallPageTitle to false so that error messages are not shown unless if conditions below are valid.
    let initialPageTitle = false;
    let initialPageDescription = false;
    //if nothing was entered in title input field
    if (movieTitle.trim().length <= 0) {
      isValid = false;
      errors.titleLength = "Please provide a video title";
      initialPageTitle = true;
    }
    //if nothing was entered in description input field
    if (movieDescription.trim().length <= 0) {
      isValid = false;
      errors.descriptionLength = "Please provide a video description";
      initialPageDescription = true;
    }
    //always reset the state. Errors keys may change depending on which fields were/were not filled in.
    this.setState({ errors, initialPageTitle, initialPageDescription });
    return isValid;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let movieTitle = event.target.title.value;
    let movieDescription = event.target.description.value;
    const isValid = this.formValidation(movieTitle, movieDescription);

    //If both title and description fields are filled out, execute following code:
    if (isValid) {
      let newMovieData = {
        title: movieTitle,
        channel: "Mohan Muruge",
        description: movieDescription,
        timestamp: Date.now(),
      };
      //construct body for post request
      await axios.post(
        "https://brainflix-project-api.herokuapp.com/videos",
        newMovieData
      );
      this.setState({
        uploadState: true,
        opacity: 1,
        padding: "1rem",
        initialPage: false,
      });
      //animation for "upload success" banner
      setTimeout(() => {
        this.setState({ uploadState: true, opacity: 0, padding: "0rem" });
      }, 2000);
      setTimeout(() => {
        this.props.history.push("/");
      }, 3000);
    }
  };

  render() {
    const { errors, initialPageTitle, initialPageDescription } = this.state;

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
                {Object.keys(errors) && initialPageTitle && (
                  <div className="upload__error">{errors.titleLength}</div>
                )}
                <label htmlFor="description" className="upload__label">
                  Add a video description
                </label>
                <textarea
                  className="upload__user-description"
                  placeholder="Add a description to your video"
                  name="description"
                ></textarea>
                {Object.keys(errors) && initialPageDescription && (
                  <div className="upload__error">
                    {errors.descriptionLength}
                  </div>
                )}
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
