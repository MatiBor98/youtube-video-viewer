import React from "react";
import { Row, Col } from "react-bootstrap";

const VideoPlayer = (props) => {
  if (!props.videoId) {
    return (
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
        Search for a video
      </h2>
    );
  }
  return (
    <React.Fragment>
      <Row style={{ backgroundColor: "blue" }}>
        <iframe
          title={props.videoId}
          src={`https://www.youtube.com/embed/${props.videoId}`}
          allowFullScreen
          width="100%"
          height="480px"
        />
      </Row>
      <Row style={{ backgroundColor: "yellow" }}>
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
          Search for a video
        </h2>
      </Row>
    </React.Fragment>
  );
};

export default VideoPlayer;
