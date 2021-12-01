import React from "react";

import Video from "./Video";
import { Row } from "react-bootstrap";

const VideosList = (props) => {
  return (
    <div className="video-list">
      <Row className="mt-4">
        <h3
          style={{
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          Related Videos
        </h3>
      </Row>
      <Row>
        <Video data={props.data} onVideoSelected={props.onVideoSelected} />
      </Row>
    </div>
  );
};

export default VideosList;
