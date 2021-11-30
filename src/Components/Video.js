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
/* 

        



<Card
          className=" mb-3"
          style={{
            backgroundColor: "#B7E0F2",
            padding: "0.2rem",
          }}
        >
          <Row style={{ display: "flex", flexWrap: "wrap" }}>
            <Col>
              <Card.Img
                src={video.snippet.thumbnails.high.url}
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Text>{video.snippet.title}</Card.Text>
                <Card.Text>{video.snippet.channelTitle}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>



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
