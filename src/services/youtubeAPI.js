import axios from "axios";
const KEY = "AIzaSyDw3Zjj2QY1Xp6pxick87G3C49EjgwlbrY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 4,
  },
  headers: {},
});
