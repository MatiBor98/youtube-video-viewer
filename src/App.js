//import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./Components/SearchBar";
import youtubeAPI from "./services/youtubeAPI";
import { useState, useEffect } from "react";
import VideosList from "./Components/VideosList";
import VideoPlayer from "./Components/VideoPlayer";
import ModalCustom from "./Components/UI/Modal";
import { Button, Form, Col, Row, Container } from "react-bootstrap";

function App() {
  const [foundVideo, setNewVideo] = useState({
    relatedVideos: [],
    selectedVideo: null,
  });
  const [count, setCounter] = useState(0);

  const [error, setError] = useState(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const initialValue = localStorage.getItem("count");
    if (initialValue) {
      setCounter(parseInt(initialValue));
    }

    searchVideoHandler("Hola");
  }, []);

  //had to use separate useEffect for setting the local storage or else the counter wouldnt work on multiple consecutive refreshes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

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
        setCounter((count) => count + 1);
      })
      .catch((errorInResponse) => {
        setError(errorInResponse);
        setShow(true);
      });
    //aca
  };
  const videoSelectedHandler = (video) => {
    setNewVideo((state) => ({ ...state, selectedVideo: video }));

    /*setNewVideo({
      ...foundVideo,
      selectedVideo: video,
    });*/
    //aca

    setCounter((count) => count + 1);
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
          <Col md="8">
            <VideoPlayer video={foundVideo.selectedVideo} />
          </Col>
          <Col md="4" className=" px-4a">
            <Row>
              <VideosList
                onVideoSelected={videoSelectedHandler}
                data={foundVideo.relatedVideos}
              />
            </Row>
            <Row className="mt-4">
              <p>Videos watched: {count}</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
