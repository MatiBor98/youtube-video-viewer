//import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../Components/UI/SearchBar";
import youtubeAPI from "../services/youtubeAPI";
import { useState, useEffect, useContext } from "react";
import VideosList from "../Components/Video/VideosList";
import VideoPlayer from "../Components/Video/VideoPlayer";
import ModalCustom from "../Components/UI/Modal";
import { Col, Row, Container } from "react-bootstrap";
import VideoContext from "../context/video-context";

function Home() {
  const ctx = useContext(VideoContext);
  const [count, setCounter] = useState(0);

  const [error, setError] = useState(null);

  const [show, setShow] = useState(false);
  useEffect(() => {
    const initialValue = localStorage.getItem("count");
    if (initialValue) {
      setCounter(parseInt(initialValue));
    }
    if (!ctx.foundVideo.selectedVideo) searchVideoHandler("Codigo del sur");
  }, []);

  //had to use separate useEffect for setting the local storage or else the counter wouldnt work on multiple consecutive refreshes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const closeHandler = () => setShow(false);

  const searchVideoHandler = async (query) => {
    youtubeAPI
      .get("/search", {
        params: {
          q: query,
        },
      })
      .then((response) => {
        setError(null);
        ctx.setNewVideo({
          relatedVideos: response.data.items.slice(1),
          selectedVideo: response.data.items[0],
        });
        setCounter((count) => count + 1);
      })
      .catch((errorInResponse) => {
        setError(errorInResponse);
        console.log(errorInResponse);
        setShow(true);
      });
  };
  const videoSelectedHandler = (video) => {
    ctx.setNewVideo((state) => ({ ...state, selectedVideo: video }));
    setCounter((count) => count + 1);
  };

  return (
    <div className="App">
      <ModalCustom
        message={
          error ? { title: "Something went wrong", detail: error.message } : ""
        }
        showModal={show}
        onClose={closeHandler}
      />
      <div className="black-color">
        <Container>
          <Row>
            <Col sm="8" className="mt-5 mb-4">
              <SearchBar onSearchVideo={searchVideoHandler} />
            </Col>
          </Row>
        </Container>
        <hr className="hr-color"></hr>
      </div>

      <Container className="black-color">
        <Row>
          <Col md="8">
            <VideoPlayer video={ctx.foundVideo.selectedVideo} />
          </Col>
          <Col md="4" className=" px-4a">
            <Row>
              <VideosList
                onVideoSelected={videoSelectedHandler}
                data={ctx.foundVideo.relatedVideos}
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

export default Home;
