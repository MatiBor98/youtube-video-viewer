import React from "react";
import "./Video.css";
import { Row, Col, Card, Container, CardGroup } from "react-bootstrap";

function selectVideo(videoObj, onVideoSelected) {
  onVideoSelected(videoObj);
}
const Video = (props) => {
  return props.data.map((video, index) => {
    console.log(video);
    return (
      <Card
        key={index}
        className="my-4 "
        onClick={() => selectVideo(video, props.onVideoSelected)}
      >
        <Row
          style={{
            height: "100%",
          }}
        >
          <Col className="px-0" xs="5" style={{}}>
            <Card.Img
              src={video.snippet.thumbnails.medium.url}
              style={{ height: 93 }}
            />
          </Col>
          <Col xs="7" style={{}}>
            <Card.Body>
              <div className="cut-tet">
                <Card.Text className="line-cutter">
                  {video.snippet.title}{" "}
                </Card.Text>
              </div>
              <Card.Text>
                <small className="line-cutter text-muted">
                  {video.snippet.channelTitle}
                </small>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  });
};

export default Video;
