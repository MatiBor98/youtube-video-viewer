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
    selectedVideo: null,
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
          selectedVideo: response.data.items[0],
        });
      })
      .catch((errorInResponse) => {
        setError(errorInResponse);
        setShow(true);
      });
    console.log(error);
  };
  const videoSelectedHandler = (video) => {
    setNewVideo({
      ...foundVideo,
      selectedVideo: video,
    });
  };

  return (
    <div className="App">
      <ModalCustom
        message={error ? error.message : ""}
        showModal={show}
        onClose={handleClose}
      />
      <div style={{ backgroundColor: "rgb(24, 24, 24)" }}>
        <Container>
          <Row>
            <Col sm="8" className="mt-5 mb-4">
              <SearchBar onSearchVideo={searchVideoHandler} />
            </Col>
          </Row>
        </Container>
        <hr style={{ color: "red" }}></hr>
      </div>

      <Container style={{ backgroundColor: "rgb(24, 24, 24)" }}>
        <Row>
          <Col sm="8">
            <VideoPlayer video={foundVideo.selectedVideo} />
          </Col>
          <Col sm="4" className=" px-5" style={{ backgroundColor: "" }}>
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
