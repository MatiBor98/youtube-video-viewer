import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import VideoDetails from "./Pages/VideoDetails";
import { VideoContextProvider } from "./context/video-context";

function App() {
  return (
    <VideoContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/videoDetails" element={<VideoDetails />} />
      </Routes>
    </VideoContextProvider>
  );
}

export default App;
