//import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./Components/SearchBar";
import youtubeAPI from "./services/youtubeAPI";
import { useState } from "react";
import VideosList from "./Components/VideosList";
import VideoPlayer from "./Components/VideoPlayer";
import ModalCustom from "./Components/UI/Modal";
import { Button, Form, Col, Row, Container } from "react-bootstrap";

function App() {
  const [foundVideo, setNewVideo] = useState({
    relatedVideos: [],
    VideoId: null,
  });

  const [error, setError] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchVideoHandler = async (query) => {
    youtubeAPI
      .get("/search", {
        params: {
          q: query,
        },
      })
      .then((response) => {
        setError(null);
        setNewVideo({
          relatedVideos: response.data.items.slice(1),
          VideoId: response.data.items[0].id.videoId,
        });
      })
      .catch((errorInResponse) => {
        setError(errorInResponse);
        setShow(true);
      });
    console.log(error);
  };
  const videoSelectedHandler = (videoId) => {
    setNewVideo({
      ...foundVideo,
      VideoId: videoId,
    });
  };

  return (
    <div className="App">
      <ModalCustom
        message={error ? error.message : ""}
        showModal={show}
        onClose={handleClose}
      />
      <Container style={{ backgroundColor: "rgb(24, 24, 24)" }}>
        <Row>
          <Col sm="8" className="mt-5">
            <SearchBar onSearchVideo={searchVideoHandler} />
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col sm="8" className="my-5">
            <VideoPlayer videoId={foundVideo.VideoId} />
          </Col>
          <Col
            sm="4"
            className="my-5 px-7"
            style={{ backgroundColor: "orange" }}
          >
            <VideosList
              onVideoSelected={videoSelectedHandler}
              data={foundVideo.relatedVideos}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
