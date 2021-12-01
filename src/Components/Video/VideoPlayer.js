import React from "react";
import { Row, Col, Button, Ratio } from "react-bootstrap";
import { Link } from "react-router-dom";
import VideoContext from "../../context/video-context";
import { useContext } from "react";

const VideoPlayer = (props) => {
  const ctx = useContext(VideoContext);

  if (!props.video) {
    return <h2 style={{ textAlign: "center" }}>Search for a video</h2>;
  }
  return (
    <React.Fragment>
      <Row className="m-3">
        <Ratio aspectRatio="16x9">
          <iframe
            className="embed-responsive-item"
            title={props.video.id.videoId}
            src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
            allowFullScreen
            width="100%"
          />
        </Ratio>
      </Row>
      <Row className="mt-3">
        <Col sm="10">
          <h5 style={{ textAlign: "Left" }}>{props.video.snippet.title}</h5>
        </Col>
        <Col sm="2" style={{ margin: "auto", display: "block" }}>
          <Link to="/videoDetails">
            <Button
              bsClass="App"
              type="submit"
              variant="dark"
              onClick={() =>
                localStorage.setItem(
                  "video",
                  JSON.stringify(ctx.foundVideo.selectedVideo)
                )
              }
            >
              Details
            </Button>
          </Link>
        </Col>
      </Row>
      <hr className="hr-color"></hr>
    </React.Fragment>
  );
};

export default VideoPlayer;
