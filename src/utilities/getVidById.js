import axios from "axios";

//Get request from API.
export const getVidById = (videoId) => {
  return axios.get(
       `https://brainflix-project-api.herokuapp.com/videos/${videoId}`
  );
};
