import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";
import Form from "../Form/Form";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";
import React from "react";
import "./MainContent.scss";
import axios from "axios";
import { getVidById } from "../../utilities/getVidById";

class MainContent extends React.Component {
  state = {
    videos: [], //videos list for "next videos" section. Initial state is empty array. Data will come from API GET request.
    selectedVideo: null, //for the featured video section, Data will come from API GET request with first video as Id.
    videosLength: null,
  };

  //Set state on initial render.
  componentDidMount() {
    axios
      .get("https://brainflix-project-api.herokuapp.com/videos")
      .then((response) => {
        return response.data;
      })
      .then((videosData) => {
        const selectedVideoId = this.props.match.params.id || videosData[0].id; //If video is selected from Next Videos list, selectedVideoId is assigned value from url params. Otherwise, on initial render, assign selectedVideoId as first object from response array.
        getVidById(selectedVideoId).then((activeVideo) => {
          //get movie by Id which will return the selected video object (comments included)
          this.setState({
            videos: videosData,
            selectedVideo: activeVideo.data,
          });
        });
      });
  }

  //when route is changed
  componentDidUpdate(previousProps, currentProps) {
    const previousId = previousProps.match.params.id;
    const currentId = this.props.match.params.id;
    //compare the previous Id with the new Id from route. If they're different, we make a API request to return the selectedvideo object, then set state with that info.
    if (previousId !== currentId) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      if (previousId && !currentId) {
        getVidById(this.state.videos[0].id).then((activeVideo) => {
          this.setState({ selectedVideo: activeVideo.data });
        });
      } else {
        getVidById(currentId).then((activeVideo) => {
          this.setState({ selectedVideo: activeVideo.data });
        });
      }
    }
  }

  filter = () => {
    return this.state.videos.filter((video) => {
      return video.id !== this.state.selectedVideo.id; //returns a single video object. Used in "Next Videos" component.
    });
  };

  render() {
    const { selectedVideo } = this.state;

    return (
      <>
        <div className="MainContent">
          {selectedVideo && <Video selectedVideo={this.state.selectedVideo} />}

          <div className="desktop">
            <div className="desktop__left-container">
              {selectedVideo && (
                <VideoInfo selectedVideo={this.state.selectedVideo} />
              )}
              {selectedVideo && (
                <Form selectedVideo={this.state.selectedVideo} />
              )}
              {selectedVideo && (
                <Comments selectedVideo={this.state.selectedVideo} />
              )}
            </div>

            <div className="desktop__right-container">
              <NextVideos
                videosList={this.filter()}
                selectChosenVideo={this.selectChosenVideo}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainContent;
