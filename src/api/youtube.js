import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyBvUrjfq76mGnbKmIeux4Qj-unp8970dl8",
  },
});
