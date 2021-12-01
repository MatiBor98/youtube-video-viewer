import React from "react";
import { Button, Container, Col, Row, Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import VideoContext from "../context/video-context";
import { useContext, useEffect } from "react";

const VideoDetails = (props) => {
  //Had to use localStorage so as to not get error while reloading the page
  const retrievedVideoString = localStorage.getItem("video");
  const retrievedVideo = JSON.parse(retrievedVideoString);

  if (!retrievedVideo)
    return <h1 style={{ color: "black" }}>This video isn't available</h1>;

  return (
    <div style={{ backgroundColor: "#282c34" }}>
      <Container
        style={{ backgroundColor: "#282c34" }}
        className=" d-flex flex-column min-vh-100 justify-content-center align-items-center"
      >
        <Row className="">
          <Card className="aloha">
            <Card.Body>
              <Row className="mb-3">
                <Link to="/">
                  <Button
                    className=" justify-content-left align-items-left"
                    bsClass="App"
                    type="submit"
                    variant="dark"
                  >
                    Back
                  </Button>
                </Link>
              </Row>
              <Row>
                <Col sm="6">
                  <Row>
                    <Card.Title>
                      Dalex - Hola Remix ft. Lenny Tavárez, Chencho Corleone,
                      Juhn "El All Star" (Video Lírico Oficial)
                    </Card.Title>
                  </Row>
                  <Row>
                    <Card.Img
                      src={retrievedVideo.snippet.thumbnails.high.url}
                    />
                  </Row>
                </Col>
                <Col sm="6">
                  <Row>
                    <Card
                      className="mt-3"
                      style={{ backgroundColor: "#272c34" }}
                    >
                      <Card.Header>Channel Title</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {retrievedVideo.snippet.channelTitle}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                  <Row>
                    <Card
                      className="mt-3"
                      style={{ backgroundColor: "#272c34" }}
                    >
                      <Card.Header>Description</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {retrievedVideo.snippet.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                  <Row>
                    <Card
                      className="mt-3"
                      style={{ backgroundColor: "#272c34" }}
                    >
                      <Card.Header>Date Posted</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {retrievedVideo.snippet.publishTime}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default VideoDetails;
