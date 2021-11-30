import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import VideoContext from "../context/video-context";
import { useContext } from "react";

const VideoDetails = (props) => {
  const ctx = useContext(VideoContext);
  console.log(ctx.foundVideo.selectedVideo);

  return (
    <Link to="/">
      <Button bsClass="App" type="submit" variant="dark">
        Details
      </Button>
    </Link>
  );
};

export default VideoDetails;
