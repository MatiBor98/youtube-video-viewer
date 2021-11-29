import axios from "axios";
const KEY = "AIzaSyA5-PkjfZtTa7ebGWSojvjcYXiLlWEpBX0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 4,
  },
  headers: {},
});
