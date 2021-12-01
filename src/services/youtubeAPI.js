import axios from "axios";
const KEY = "AIzaSyACXO4KeKsqkdCvKJbd5YS9_83y7MgDC0I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 4,
  },
  headers: {},
});
