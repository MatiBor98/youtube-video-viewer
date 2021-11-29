import React from "react";
import "./Video.css";
import { Row, Col, Card } from "react-bootstrap";

function selectVideo(videoObj, onVideoSelected) {
  onVideoSelected(videoObj);
}
const Video = (props) => {
  return props.data.map((video, index) => {
    console.log(video);
    return (
      <Card
        className="mb-3"
        style={{
          maxWidth: "540px",
          maxHeight: "200px",
          backgroundColor: "red",
          cursor: "pointer",
        }}
        onClick={() => selectVideo(video, props.onVideoSelected)}
      >
        <div class="card-block">
          <Row noGutters={true}>
            <Col
              xs="5"
              style={{
                backgroundColor: "green",
                margin: "auto",
                display: "block",
              }}
            >
              <Card.Img src={video.snippet.thumbnails.high.url} style={{}} />
            </Col>
            <Col
              xs="7"
              style={{
                backgroundColor: "black",
              }}
            >
              <Card.Body>
                <Card.Text>{video.snippet.title} </Card.Text>
                <Card.Text>
                  <small class="text-muted">{video.snippet.channelTitle}</small>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>
      </Card>
    );
  });
};

export default Video;
/* 
<Row
        className="video"
        key={index}
        onClick={() => selectVideo(video, props.onVideoSelected)}
      >
        <Col
          style={{
            backgroundImage: `url(${video.snippet.thumbnails.high.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "150px",
          }}
          key={index}
        />
        <Col>
          <p>{video.snippet.title}</p>
        </Col>
      </Row>
 */
