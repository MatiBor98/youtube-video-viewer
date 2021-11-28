import axios from "axios";
const KEY = "AIzaSyCv0YoF2ozIuT3WeyuIJO8pqiNIqtdZx9c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 4,
  },
  headers: {},
});
