import axios from "axios";

//Get request from API.
export const getVidById = (videoId) => {
  return axios.get(`http://localhost:8080/videos/${videoId}`);
};
