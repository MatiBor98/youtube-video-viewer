import axios from "axios";
const KEY = "AIzaSyC61uEox9h4IdF4UGCSFta0BLW3uU-9kwI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 4,
  },
  headers: {},
});
